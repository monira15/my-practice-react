

export default function User({user}){
   const{name,email}=user;
    return(
        <div className="box">
            <h2>name:{name}</h2>
            <h4>email:{email}</h4>
        </div>
    )
}