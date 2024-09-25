import defusers from "../components/user";

export default function Hero({ users, reset }) {
  function handleDefuserDelete(index) {
    defusers.splice(index, 1);
    reset();
  }

  function handleClick(index) {
    const updatedUsers = [...users].reverse();
    updatedUsers.splice(index, 1);
    const finalUsers = updatedUsers.reverse();
    users.length = 0;
    users.push(...finalUsers);
    reset();
  }

  return (
    <div className="heromaindiv">
      <div className="persondetails">
        {users
          .slice()
          .reverse()
          .map((data, index) => (
            <div className="persondetails" key={index}>
              <div>
                <img className="img" src={data.img} alt={data.name} />
              </div>
              <div>
                <h2 className="personname">{data.name}</h2>
                <p className={!data.a ? "money" : "moneydebt"}>
                  {!data.a
                    ? `${data.name} owe you $${data.money}`
                    : `you owe  ${data.name} $${data.money}`}
                </p>
                <div>
                  <button className="delete" onClick={() => handleClick(index)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

        {defusers.map((data, index) => (
          <div className="persondetails" key={index}>
            <div>
              <img className="img" src={data.img} alt={data.name} />
            </div>
            <div>
              <h2 className="personname">{data.name}</h2>
              <p className={!data.a ? "moneydebt" : "money"}>
                {!data.a
                  ? `${data.name} owe you $${data.money}`
                  : `you owe  ${data.name} $${data.money}`}
              </p>
              <div>
                <button
                  className="delete"
                  onClick={() => handleDefuserDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
