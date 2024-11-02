import OrderCard from "../Components/OrderCard";

export default function LoginPage() {
  return (
    <div className="orders">
        <OrderCard 
            id = {"3f2504e0-4f89-11d3-9a0c-0305e82c3301".substring(0,8)}
            title="Билборд на Малышева" 
            description="Самое подробное описание заявки, которое только может быть, подробнее не может быть"
            direction="Реклама"
            subspecies="Билборды"
            deadline="05.03.2025"
            commentsCount="15"/>
            <OrderCard 
            id = {"3f2504e0-4f89-11d3-9a0c-0305e82c3301".substring(0,8)}
            title="Билборд на Малышева" 
            description="Самое подробное описание заявки, которое только может быть, подробнее не может быть Самое подробное описание заявки, которое только может быть, подробнее не может быть"
            direction="Реклама"
            subspecies="Билборды"
            deadline="05.03.2025"
            commentsCount="15"/>
            <OrderCard 
            id = {"3f2504e0-4f89-11d3-9a0c-0305e82c3301".substring(0,8)}
            title="Билборд на Малышева" 
            description="Самое подробное описание заявки, которое только может быть, подробнее не может быть"
            direction="Реклама"
            subspecies="Билборды"
            deadline="05.03.2025"
            commentsCount="15"/>
    </div>
  );
}

