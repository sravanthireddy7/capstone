export const Contact =()=>{
    return(
        <div className="container mb-4 p-4" style={{height:'520px'}}>
    <header>
        <h1>Contact Us</h1>
    </header>

    <main>
        <section>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.</p>
        </section>

        <section>
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> support@ecommerce.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Address:</strong> 123 E-commerce St, Shop City, SC 12345</p>
        </section>

        {/* <section>
            <h2>Contact Form</h2>
            <form action="submit_contact_form.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                
                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required/>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </section> */}
    </main>
</div>
    )
}