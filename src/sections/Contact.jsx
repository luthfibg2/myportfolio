import React, { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/contact_model/ContactExperience'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here

    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }

    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Contact Me" sub="Get In Touch" />
        
        <h2 className="text-3xl font-bold text-white mt-12">Kontak</h2>

        <div className="mt-10 flex flex-col md:flex-row gap-10">
          {/* Left side - 3D Model */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-black">
            <ContactExperience/>
          </div>

          {/* Right side - Contact Form */}
          <form className="w-full md:w-1/2 space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <div>
              <label className="text-white block mb-2" htmlFor="name">Nama</label>
              <input type="text" id="name" name="name" placeholder="Nama Anda"
              value={formData.name}
              onChange={handleChange}
              required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div>
              <label className="text-white block mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email Anda"
              value={formData.email}
              onChange={handleChange}
              required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div>
              <label className="text-white block mb-2" htmlFor="message">Pesan</label>
              <textarea id="message" name="message" placeholder="Tulis pesan Anda..."
              value={formData.message}
              onChange={handleChange}
              required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                rows="6" />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-gray-300  text-slate-800 px-6 py-3 rounded-lg hover:bg-opacity-80 transition">
              <p>{loading ? 'Mengirim...' : 'Kirim'}</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
