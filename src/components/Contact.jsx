const Contact = () => {
  return (
    <section id="contact" className="my-20 pb-24 container mx-auto px-6 md:px-16 lg:px-32">
      <div className="max-w-2xl mx-auto text-center">
        <div className="my-10 relative w-fit mx-auto">
          <h2 className="text-5xl sm:text-8xl font-semibold text-[#233044]">
            Hit Me Up
          </h2>
          <span className="absolute top-[56%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 text-base sm:text-2xl font-bold text-[#d2d3d4] whitespace-nowrap">
            Let's Build Something Amazing
          </span>
        </div>

        <p className="pb-20 text-base sm:text-lg text-[#8892b0]">
          Have a project in mind or just want to say hello? I’d love to hear
          from you! Whether you're looking to collaborate, have questions about
          our work, or simply want to chat, feel free to reach out. Drop me a
          message, and I'll get back to you as soon as possible. Let’s create
          something amazing together!
        </p>

        <a 
        href="mailto:gamsongideon@gmail.com" 
        className="px-5 py-2 text-[#27DDDF] text-base font-semibold border border-[#27DDDF] rounded-lg hover:bg-[length:200%_auto] hover:bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#1FA2FF] shadow-lg hover:bg-right-bottom hover:text-[#0A192F] transition duration-300 cursor-pointer">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
