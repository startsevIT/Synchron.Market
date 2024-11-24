import { GetAccountInStorage } from "../../Synchron.Core/Token";
import "./MiniAccount.css"

export default function MiniAccount() {

    const name = GetAccountInStorage();
    return (
        <div className="miniAccount">
            <div className="firstname">
                {name.firstName}
            </div>
            <div className="initials"> 
                {name.name.substring(0,1)}.{name.patronymic.substring(0,1)}.
            </div>
            <div className="avatar" style={{backgroundImage:`url(${name.imgUrl})`}}>
            </div>
        </div>
    );
  }