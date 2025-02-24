"use client";
import ContactForm from './ContactForm';
import ContactImage from './ContactImage';

export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row bg-primary lg:items-start w-full p-6" id="contact">
        
      {/* Contact Image Section */}
      <div className="lg:w-1/2 my-auto">
        <ContactImage/>
      </div>

      {/* Contact Form Section */}
      <div className="lg:w-1/2 bg-white rounded-md py-6" id='contact-form-container'>
        <ContactForm />
      </div>

    </div>
  );
}
