import data from "../../data/index.json";
import { useState } from "react";

export default function ContactMe() {

    const [selectedTopic, setSelectedTopic] = useState(""); // State för att hålla reda på det valda ämnet

    const handleTopicChange = (e) => {
      const selectedValue = e.target.value;
      setSelectedTopic(selectedValue);
    };
  
  return (
    <section className="contact--section" id="Contact">
      <div>
        <p className="sub--title"></p>
        <h2 className="">Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus
        </p>
      </div>
      <form  action="https://formsubmit.co/56e7538715dc609960e4e15452516846" method="post" className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            ></input>
            
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            ></input>
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            ></input>
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="choose-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>

            <select 
            id="choose-topic" 
            className="contact--input text-md"
            onChange={handleTopicChange}
            value={selectedTopic}
            >
              {data?.contact?.map((item, index) => (
                <option placeholder="Select a topic" key={item.id}>
                  {" "}
                  {item.title}
                  <input type="hidden" name="_subject" value={selectedTopic}></input>
                </option>
              ))}
            </select>
          </label>
          
        </div>
     
  

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            type="text"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox"></input>
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
