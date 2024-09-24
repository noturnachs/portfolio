{
  /* section 2 */
}
<section
  className="min-h-screen flex items-center justify-center bg-gray-100"
  style={{
    backgroundImage: `url(${sec2bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between p-4">
    {/* Text Section */}
    <div className="md:w-1/2 p-4 text-center md:text-left text-white ">
      <h2 className="text-3xl font-bold mb-4 anton-regular">ABOUT ME</h2>
      <p className="md:text-md mb-6 text-sm text-justify work-sans-reg">
        I'm a Web Developer who builds engaging websites. I focus on delivering
        projects quickly and efficiently, ensuring everything works smoothly. I
        aim to create strong connections with clients and understand their
        needs, providing tailored solutions that really stand out.
      </p>
      <button
        class="cursor-pointer transition-all bg-[#111111] text-white px-6 py-2 rounded-lg
border-white
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        View Projects
      </button>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 p-4 flex justify-center">
      <img
        src={serv1}
        alt="Portfolio"
        className="w-[692px] h-[692px] object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>;

{
  /* section 3 */
}
<section
  className="min-h-screen flex items-center justify-center bg-gray-100"
  style={{
    backgroundImage: `url(${sec3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between p-4">
    {/* Text Section */}
    <div className="md:w-1/2 p-4 text-center md:text-left text-white">
      <h2 className="text-3xl font-bold mb-4 anton-regular">
        SERVICES I CAN OFFER
      </h2>
      <p className="md:text-md mb-6 text-sm text-justify work-sans-reg">
        Things that I can do for you.
      </p>
    </div>

    {/* Services Grid Section */}
    <div className="md:w-1/2 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Service Item 1 */}
        <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
          <RiComputerLine size={50} className="text-[#ece041]" />
          <h3 className="text-md anton-regular mt-2 ">Website Development</h3>
          <p className="text-xs mt-2 mb-5 text-start">
            Website designs are custom made based on clients' preferences.
          </p>
        </div>

        {/* Service Item 2 */}
        <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
          <IoPhoneLandscapeOutline size={50} className="text-[#ece041]" />
          <h3 className="text-md anton-regular mt-2 ">Responsive Designs</h3>
          <p className="text-xs mt-2 mb-5 text-start">
            All designs are mobile and desktop friendly!
          </p>
        </div>

        {/* Service Item 3 */}
        <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
          <RiFileEditFill size={50} className="text-[#ece041]" />
          <h3 className="text-md anton-regular mt-2 ">Free Updates</h3>
          <p className="text-xs mt-2 mb-5 text-start">
            Get free updates for your website.
          </p>
        </div>
        {/* Service Item 4 */}
        <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
          <BiSupport size={50} className="text-[#ece041]" />
          <h3 className="text-md anton-regular mt-2 ">Free Support</h3>
          <p className="text-xs mt-2 mb-5 text-start">
            Get free supports for your website.
          </p>
        </div>

        {/* Service Item 5 */}
        <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
          <LiaMoneyBillAlt size={50} className="text-[#ece041]" />
          <h3 className="text-md anton-regular mt-2 ">Cheap Rates</h3>
          <p className="text-xs mt-2 mb-5 text-start">
            Get the best rates for your website.
          </p>
        </div>

        {/* Service Item 6 */}
        <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
          <GrStatusGood size={50} className="text-[#ece041]" />
          <h3 className="text-md anton-regular mt-2 ">
            Regular Progress Reports
          </h3>
          <p className="text-xs mt-2 mb-5 text-start">
            Get regular progress reports for the status of your website.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>;
