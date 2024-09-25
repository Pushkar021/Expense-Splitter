import React, { useState } from "react";

export default function Insert({ addUser }) {
  const [count, setCount] = useState(499476);
  const [data, setData] = useState({
    name: "",
    totalMoney: 1000,
    expense: 500,
    image: `https://i.pravatar.cc/48?u=${count}`,
    exp: "YOU",
    a: false,
  });
  function x() {
    const min = 1;
    const max = 400;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
  }
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    if (data.name.trim() === "") {
      alert("Please enter a name.");
      return;
    }

    if (data.totalMoney < 0 || data.totalMoney > 10000000) {
      alert("Total money must be between 0 and 10000000.");
      return;
    }

    if (data.expense > data.totalMoney) {
      alert("Your expense cannot exceed your total money.");
      return;
    }

    setCount(() => {
      const newCount = x();
      setCount(newCount);
      setData((prevData) => ({
        ...prevData,
        image: `https://i.pravatar.cc/48?u=${newCount}`,
      }));

      if (data.exp === "YOU") {
        addUser({
          name: data.name,
          money: data.totalMoney - data.expense,
          img: data.image,
          a: false,
        });
      } else {
        addUser({
          name: data.name,
          money: data.expense,
          img: data.image,
          a: true,
        });
      }

      setData({
        name: "",
        totalMoney: 1000,
        expense: 500,
        image: `https://i.pravatar.cc/48?u=${count}`,
        exp: "YOU",
        a: false,
      });

      // Hide form
      setShowForm(false);

      return newCount;
    });
  };

  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Friend"}
      </button>

      {showForm && (
        <div className="form">
          <div>
            <label htmlFor="name">🧑‍🤝‍🧑 Friend name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="totalMoney">💰 Bill Value:</label>
            <input
              type="number"
              id="totalMoney"
              value={data.totalMoney}
              onChange={(e) =>
                setData({ ...data, totalMoney: parseInt(e.target.value, 10) })
              }
              min="0"
              max="10000000"
            />
          </div>

          <div>
            <label htmlFor="expense">✈️ Your expense:</label>
            <input
              type="number"
              id="expense"
              value={data.expense}
              onChange={(e) =>
                setData({ ...data, expense: parseInt(e.target.value, 10) })
              }
              min="0"
              max={data.totalMoney}
            />
          </div>

          <div>
            <p>🧑‍🤝‍🧑 Friend's expense: {data.totalMoney - data.expense}</p>
          </div>

          <div>
            <label htmlFor="image">🌟 Image URL:</label>
            <input
              type="text"
              id="image"
              placeholder="image-link"
              value={data.image}
              onChange={(e) => setData({ ...data, image: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="payer">🤑 Who is paying the bill:</label>
            <select
              id="payer"
              value={data.exp}
              onChange={(e) =>
                setData({
                  ...data,
                  exp: e.target.value,
                  a: e.target.value === "YOU" ? false : true,
                })
              }
            >
              <option value={data.name}>Friend</option>
              <option value="YOU">YOU</option>
            </select>
          </div>

          <div>
            <button type="button" onClick={handleClick}>
              SUBMIT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
