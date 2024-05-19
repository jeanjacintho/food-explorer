const knex = require("../database/knex");

class OrdersController {
    async create(request, response) {
        const { cart, orderStatus, totalPrice, paymentMethod } = request.body;
    const user_id = request.user.id;

    try {
        // Inserir na tabela orders e obter o id gerado
        const [order_id] = await knex("orders").insert({
            orderStatus,
            totalPrice,
            paymentMethod,
            user_id,
        }, ['id']);

        if (!order_id) {
            return response.status(500).json({ error: "Error creating order" });
        }

        const itemsInsert = cart.map((item) => ({
            title: item.title,
            quantity: item.quantity,
            dish_id: item.id,
            order_id: order_id.id ? order_id.id : order_id,
        }));

        await knex("ordersItems").insert(itemsInsert);

        return response.status(201).json({ order_id: order_id.id ? order_id.id : order_id });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Error processing the order" });
    }
    }

    async update(request, response) {
        const {id, orderStatus} = request.body;
        await knex("orders").update({orderStatus}).where({id});
        return response.status(200).json();
    }

    async index(request, response) {
        const user_id = request.user.id;
        const user = await knex("users").where({id: user_id}).first();

        if(user.role === "admin") {
            const orders = await knex("ordersItems").select([
                "orders.id",
                "orders.user_id",
                "orders.orderStatus",
                "orders.totalPrice",
                "orders.paymentMethod",
                "orders.created_at",
                "users.name as userName",
            ]).innerJoin("orders", "orders.id", "ordersItems.order_id")
            .innerJoin("users", "users.id", "orders.user_id").groupBy("orders.id");

            const ordersItems = await knex("ordersItems");
            const ordersWithItems = orders.map(order => {
                const orderItem = ordersItems.filter(item => item.order_id === order.id);
                return {
                   ...order,
                    items: orderItem
                }
            });

            return response.status(200).json(ordersWithItems);
        } else {
            const orders = await knex("ordersItems").where({ user_id }).select([
                "orders.id",
                "orders.user_id",
                "orders.orderStatus",
                "orders.totalPrice",
                "orders.paymentMethod",
                "orders.created_at"
            ]).innerJoin("orders", "orders.id", "ordersItems.order_id").groupBy("orders.id");

            const ordersItems = await knex("ordersItems");
            const ordersWithItems = orders.map(order => {
                const orderItem = ordersItems.filter(item => item.order_id === order.id);

                return {
                   ...order,
                    items: orderItem
                }
            });

            return response.status(200).json(ordersWithItems);
        }
    }
}

module.exports = OrdersController;