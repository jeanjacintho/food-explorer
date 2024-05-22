import { CartContainer, TableCart, TableOrders, CardOrderContainer, TablePayments, GroupColumnComponent, BlockComponent } from "./styles"

import { useNavigate } from "react-router-dom";
import { PiCaretLeft, PiBasket, PiPixLogo, PiCreditCard, PiQrCode, PiReceipt, PiClock, PiCheckCircle } from "react-icons/pi";
import { useAuth } from "../../../hooks/auth";
import { useCart } from "../../../hooks/cart";
import { useContext, useState } from "react";
import { api } from "../../../services/api";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { CardOrder } from "../../components/CardOrder";

import qrcode from "../../../assets/qrcode.svg";

export function CartOrder() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const {cart, total, handleClearCart} = useCart();
    const [loading, setLoading] = useState(false);
    const [closeCart, setCloseCart] = useState(false);

    const [isPixVisible, setIsPixVisible] = useState(false);  
    const [isPixActive, setIsPixActive] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);
    const [isCardActive, setIsCardActive] = useState(false);
    const [isQRVisible, setIsQRVisible] = useState(false);
    const [isFinallyOrder, setIsFinallyOrder] = useState(false);

    const [num, setNum] = useState('');
    const [cvc, setCvc] = useState('');

    const handleNumChange = event => {
        const limit = 16;
        setNum(event.target.value.slice(0, limit));
    };

    const handleCvcChange = event => {
        const limit = 3;
        setCvc(event.target.value.slice(0, limit));
    };

    function handlePixVisible() {
        setIsPixVisible(!isPixVisible);
        setIsPixActive(true);
        setIsCardActive(false);
        setIsCardVisible(false);
    }

    function handleCardVisible() {
        setIsCardVisible(!isCardVisible);
        setIsPixActive(false);
        setIsCardActive(true);
        setIsPixVisible(false);
    }

    function handleQRVisible() {
        setIsQRVisible(!isQRVisible);
    }

    function handleBack() {
        navigate(-1);
    }

    function handleCloseCart() {
        setCloseCart(true);
        setIsFinallyOrder(true);
    }

    const [isClockActive, setIsClockActive] = useState(false);
    const [isApprovedActive, setIsApprovedActive] = useState(false);

    function paymentManager() {
        setIsCardVisible(false);
        setIsPixVisible(false);

        setIsClockActive(true);
        setIsApprovedActive(false);
        setTimeout(() => {
            setIsClockActive(false);
            setIsApprovedActive(true);
        }, 4000);
    }

    function isPixApproved() {
        handleQRVisible();
        setTimeout(() => {
            handleFinishPayment(cart);
        }, 4000);
    }

    function handleCreatedCart(cart) {
        return {
          orderStatus: 'Pendente',
          paymentMethod: isPixActive ? 'pix': 'creditCard',
          totalPrice: total,
          cart: cart.map(item => (
            {
              id: item.id,
              title: item.name,
              quantity: item.quantity
            }
          ))
        }
    }

    async function handleFinishPayment(cart) {
        const newCart = handleCreatedCart(cart);

        if(isCardActive) {
            if (cart.length < 1) {
                navigate(-1);
                return alert("Oops! Your shopping cart is empty. Add something before trying to pay.");
            }
            if (!isPixActive && num.length < 16) {
                alert("Error: Incomplete card number!");
                return;
            }

            if (!isPixActive && date.length < 4) {
                return alert("Error: Card validity incomplete!");
            }

            if (!isPixActive && cvc.length < 3) {
                return alert("Error: Incomplete card CVC!");
            }
        }

        setLoading(true);
        
        await api.post("/orders", newCart).then(() => {
            paymentManager();
            setTimeout(() => {
                alert("Order registered successfully!");
                navigate(-1);
                handleClearCart();
            }, 7000);
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Unable to register");
            }
        });
        setLoading(false);
    }

    return (
        <CartContainer>
            <div><Button icon={PiCaretLeft} variant="outline" text="Voltar" onClick={handleBack}/></div>
            <h1>Meu pedido</h1>
            <TableCart>
                <TableOrders style={{display: `${isFinallyOrder ? 'none': ''}`}}>
                    <CardOrderContainer>
                        {
                            cart && 
                            cart.map(item => (
                                <CardOrder key={String(item.id)} data={item} loading={closeCart}/>
                            ))
                        }
                    </CardOrderContainer>
                    <div className="footerOrders">
                        <p>Total: R${total}</p>
                        <Button text="Finalizar pedido" icon={PiBasket} onClick={handleCloseCart} loading={closeCart}/>
                    </div>
                </TableOrders>
                <TablePayments  style={{display: `${isFinallyOrder ? '': 'none'}`}}>
                    { closeCart === false && <h1>Finalize o pedido para ir para o processo de pagamento</h1>}
                    { closeCart === true &&
                    <>
                    <div className="paymentsHeader">
                        <button onClick={handlePixVisible} disabled={loading}><PiPixLogo />PIX</button>
                        <button onClick={handleCardVisible} disabled={loading}><PiCreditCard />CRÉDITO</button>
                    </div>
                    <div className="paymentContent">
                        { isPixVisible & isQRVisible === false ? <Button text="Gerar QRCode" icon={PiQrCode} onClick={isPixApproved}/> : ''}
                        { isPixVisible & isQRVisible === true ? <img src={qrcode} alt="qrcode"/> : ''}
                        { isCardVisible && 
                        <>
                        <BlockComponent>
                                <span>Número do cartão</span>
                                <Input placeholder="0000 0000 0000 0000" value={num} onChange={handleNumChange} id="num" name="num"/>
                            </BlockComponent>
                        <GroupColumnComponent>
                            <BlockComponent>
                                <span>Validade</span>
                                <Input placeholder="04/25" maxLength="5" id="date" name="date"/>
                            </BlockComponent>
                            <BlockComponent>
                                <span>CVC</span>
                                <Input placeholder="000" value={cvc} onChange={handleCvcChange} id="cvc" name="cvc"/>
                            </BlockComponent>
                        </GroupColumnComponent>
                        <Button text={loading ? "Finalizando pagamento" : "Finalizar pagamento"} icon={PiReceipt} style={{width: '100%'}} onClick={()=>{handleFinishPayment(cart)}} />
                        </>
                        }
                        {isClockActive && 
                        <>
                        <PiClock size={80} />
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center'}}>
                            <h3>Estamos processando o seu pagamento.</h3>
                            <span>Em instantes você receberá a confirmação.</span>
                        </div>
                        </>
                        }
                        {isApprovedActive &&
                        <>
                        <PiCheckCircle size={80} />
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center'}}>
                            <h2>Seu pagamento foi aprovado!</h2>
                            <span>Em breve você receberá o pedido.</span>
                        </div>
                        </>
                        }
                    </div>
                    </>
                    }
                </TablePayments>
            </TableCart>
        </CartContainer>
    )
}