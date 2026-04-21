export default function Page() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>BEAT A PEST</h1>

      <h2>Book a Visit</h2>
      <form action="https://formspree.io/f/YOURID" method="POST">
        <input name="name" placeholder="Name" /><br/>
        <input name="phone" placeholder="Phone" /><br/>
        <input name="address" placeholder="Address" /><br/>
        <input type="hidden" name="type" value="Booking" />
        <button type="submit">Book</button>
      </form>

      <h2>Get a Quote</h2>
      <form action="https://formspree.io/f/YOURID" method="POST">
        <input name="name" placeholder="Name" /><br/>
        <input name="phone" placeholder="Phone" /><br/>
        <input name="issue" placeholder="Issue" /><br/>
        <input type="hidden" name="type" value="Quote" />
        <button type="submit">Get Quote</button>
      </form>

      <h2>Enquiry</h2>
      <form action="https://formspree.io/f/YOURID" method="POST">
        <input name="name" placeholder="Name" /><br/>
        <textarea name="message" placeholder="Message"></textarea><br/>
        <input type="hidden" name="type" value="Enquiry" />
        <button type="submit">Send</button>
      </form>

      <h2>Pay</h2>
      <a href="https://revolut.me/ruairiri9t">Click here to pay</a>
    </div>
  );
}
