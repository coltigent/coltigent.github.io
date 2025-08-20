



// import React from 'react';
// import image from './../images/coltigent_office.jpg';

// const Contact = () => {

//    const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//           alert("Message sent successfully!");
//           e.target.reset();
//       }, (error) => {
//           console.log(error.text);
//           alert("Failed to send message, please try again.");
//       });
//   };

//   return (
//     <div className="container py-5 mt-5">

//         <div className="row align-items-center justify-content-center mb-5">
        
//         {/* Image Column */}
//         <div className="col-md-6 mb-4 mb-md-0">
//           <div className="overflow-hidden rounded shadow-sm" style={{ height: '100%', maxHeight: '600px' }}>
//             <img
//               src={image}
//               alt="About Coltigent"
//               className="img-fluid w-100 h-100"
             
              
//             />
//           </div>
//         </div>

//         {/* Location Card Column */}
//         <div className="col-md-6">
//           <div className="card shadow animate__animated animate__fadeInUp" style={{ backgroundColor: '#ffffff', border: 'none' }}>
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">📍 Our Location</h5>
//               <p className="card-text text-muted mb-0">
//                 <strong>Coltigent Technology Services PVT LTD</strong><br />
//                 Office #818, 8th Floor, Bramha SKY Uzuri (A Building)<br />
//                 Opp. PCMC Corporation Building, Pimpri,<br />
//                 Pune, Maharashtra - 411018, India
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Page Heading */}
//       <div className="text-center mb-5">
//         <h2 className="fw-bold">Contact Us</h2>
//         <p className="lead text-muted">Have a question or need help? We’d love to hear from you!</p>
//       </div>

   
//        <div className="row justify-content-center">
//         <div className="col-md-8">
//           <form>
//             {/* Name */}
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Your Name</label>
//               <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
//             </div>

//             {/* Email */}
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Your Email</label>
//               <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
//             </div>

//             {/* Subject */}
//             <div className="mb-3">
//               <label htmlFor="subject" className="form-label">Subject</label>
//               <input type="text" className="form-control" id="subject" placeholder="Subject" />
//             </div>

//             {/* Message */}
//             <div className="mb-4">
//               <label htmlFor="message" className="form-label">Message</label>
//               <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..." required></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
//             </div>
//           </form>
//         </div>

//       </div> 

//     </div>
//   );
// };

// export default Contact;










 


// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [status, setStatus] = useState('');

//   const handleSubmit = (e) => {
//     // no preventDefault here, let the form submit normally
//     setStatus('Thanks for your message!'); 
//     // You can optionally clear the form or add redirect here, but usually the page reloads or Formspree shows a thank you page
//   };

//   return (
//     <div style={{ maxWidth: '500px', marginTop: '10px' }}>
//       <h2>Contact Us</h2>
//       <form 
//         action="https://formspree.io/f/mdkdrkqn" 
//         method="POST" 
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="name" placeholder="Your Name" required />

//         <label htmlFor="email" className="mt-3">Email</label>
//         <input type="email" name="email" id="email" placeholder="Your Email" required />

//         <label htmlFor="message" className="mt-3">Message</label>
//         <textarea name="message" id="message" rows="5" placeholder="Your Message" required></textarea>

//         <button type="submit" style={{ marginTop: '1rem' }}>Send</button>
//       </form>

//       {status && <p style={{ marginTop: '1rem', color: 'green' }}>{status}</p>}
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState } from 'react';
import image from './../images/coltigent_office.jpg';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdkdrkqn', {  // <-- Replace with your Formspree form ID
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Thanks for your message!');
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatus(result.errors.map(error => error.message).join(', '));
        } else {
          setStatus('Oops! There was a problem submitting your form');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form');
    }
  };

  return (
    <div className="container py-5 mt-5">

         

      <div className="row align-items-center justify-content-center mb-5">

  {/* Image Column */}
  <div className="col-md-6 mb-4 mb-md-0">
    <div className="overflow-hidden rounded shadow-sm" style={{ height: '100%', maxHeight: '600px' }}>
      <img
        src={image}
        alt="About Coltigent"
        className="img-fluid w-100 h-100"
      />
    </div>
  </div>

  {/* Location Card Column */}
  <div className="col-md-5 d-flex align-items-center" style={{ height: '600px' }}>
    <div
      className="card shadow animate__animated animate__fadeInUp w-100"
      style={{
        backgroundColor: '#ffffff',
        border: 'none',
        height: '100%',        // full height of parent
      }}
    >
      <div className="card-body text-center d-flex flex-column justify-content-center h-100">
        <h5 className="card-title fw-bold">📍 Our Location</h5>
        <p className="card-text text-muted mb-0">
          <strong>Coltigent Technology Services PVT LTD</strong><br />
          Office #818, 8th Floor, Bramha SKY Uzuri (A Building)<br />
          Opp. PCMC Corporation Building, Pimpri,<br />
          Pune, Maharashtra - 411018, India
        </p>
      </div>
    </div>
  </div>

</div>

  
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="lead text-muted">Have a question or need help? We’d love to hear from you!</p>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-1">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" required />
            </div>

            {/* Email */}
            <div className="mb-1">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>

            {/* Subject */}
            <div className="mb-1">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" />
            </div>

            {/* Message */}
            <div className="mb-2">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea name="message" className="form-control" id="message" rows="5" placeholder="Type your message here..." required></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
            </div>
          </form>
          {status && <p className="mt-3" style={{ color: status.includes('Thanks') ? 'green' : 'red' }}>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
