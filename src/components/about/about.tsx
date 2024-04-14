

const AboutPage = () => {
    return (
      <>
      <h1 className="flex justify-center pt-10 font-bold text-2xl text-blue-500">About Us</h1>
        <section className="about-us grid grid-cols-1 md:grid-cols-2 gap-4 py-16 items-center justify-center container"> 
          <div className="about-image relative">
            <img
              src="https://cdn.pixabay.com/photo/2023/09/21/18/17/automobile-8267369_1280.jpg"
              alt="About Us Image"
              className="w-full rounded-lg shadow-md object-cover height: 100%;"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 opacity-60"></div>
            <h2 className="text-3xl font-bold text-white absolute inset-y-1/2 px-8 bottom-4">
              know More
            </h2>
          </div>
          <div className="about-text px-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              metus arcu, blandit quis risus eget, elementum pulvinar magna.
              Curabitur auctor tincidunt nibh vitae molestie. Sed consectetur quam
              id leo. In hac habitasse platea dictumst. Pellentesque ornare sem
              lacinia quam venenatis vestibulum.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Donec rutrum congue leo eget malesuada. Nulla tempor magna vel
              egestas gravida. Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. Integer posuere erat a ante blandit
              tristique.
            </p>
          </div>
        </section>
        <div className="border p-2"></div>
        <section className="about-us grid grid-cols-1 md:grid-cols-2 gap-4 py-16 items-center justify-center container pb-[20rem]"> 
          <div className="about-text px-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              metus arcu, blandit quis risus eget, elementum pulvinar magna.
              Curabitur auctor tincidunt nibh vitae molestie. Sed consectetur quam
              id leo. In hac habitasse platea dictumst. Pellentesque ornare sem
              lacinia quam venenatis vestibulum.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Donec rutrum congue leo eget malesuada. Nulla tempor magna vel
              egestas gravida. Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. Integer posuere erat a ante blandit
              tristique.
            </p>
          </div>
          <div className="about-image relative">
            <img
              src="https://cdn.pixabay.com/photo/2017/07/22/10/22/uh-60-blackhawk-2528323_1280.jpg"
              alt="About Us Image"
              className="w-full rounded-lg shadow-md object-cover height: 100%;"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900 opacity-60"></div>
            <h2 className="text-3xl font-bold text-white absolute inset-y-1/2 px-8 bottom-4">
              we Are deffrent
            </h2>
          </div>
        </section>
      </>
    );
  };
  
  export default AboutPage;
  