import React, { useState } from "react";

function App() {
  const [ethnicity, setEthnicity] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [sex, setSex] = useState("");
  const [numChildren, setNumChildren] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`This person is in the age range of ${ageRange}, is ${sex}, and has ${numChildren} children.`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ethnicity:
          <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
            <option value="Asian">Asian</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
        </label>
        <br />

        <label>
          Age range:
          <select value={ageRange} onChange={(e) => setAgeRange(e.target.value)}>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65 or older">65 or older</option>
          </select>
        </label>
        <br />

        <label>
          Sex:
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />

        <label>
          Number of children:
          <select value={numChildren} onChange={(e) => setNumChildren(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3 or more">3 or more</option>
          </select>
        </label>
        <br />

        <button type="submit">Return results</button>
      </form>
    </div>
  );
}

export default App;
