import { useDistortionEffectCarousel } from 'distortion-effect-carousel';


interface MyCarouselProps {
    images: string[];
    displacmentImage: string;
  }
   
  const MyCarousel: React.FC<MyCarouselProps> = ({
    displacmentImage,
    images,
  }) => {
    const { ref, next, prev } = useDistortionEffectCarousel({
      images,
      displacmentImage,
    });
   
    // ... do something with next() and prev()
    return (
      <div
        style={{
          height: '100vh',
          zIndex: 999999999,
          objectFit: 'contain'
        }}
        ref={ref}
      />
    );
  };
export default function Hero() {
    return (
        <section className="pt-6 pb-20 overflow-hidden">
       
            <div className=" overflow-hidden rounded-t-2xl">
                <div className="px-8 pt-20">
                    <div className="md:max-w-2xl text-center mx-auto">
                        <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                            Best caption here
                        </span>
                        <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-gray-900 font-black tracking-tight font-display">
                            Build what you imagine
                        </h1>
                        <p className="mb-8 text-xl font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            venenatis volutpat velit, quis iaculis velit bibendum a. Maecenas
                            accumsan fermentum nisl.
                        </p>
                        <div className="flex flex-wrap justify-center mb-20 -m-2">
                            <div className="w-full md:w-auto p-2">
                                <a
                                    className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative z-20 px-8 max-w-max mx-auto">
                        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1060&t=st=1677065393~exp=1677065993~hmac=729dc344a508766169a2b416398b728f981deace3b15a6bb6236c8036e503d4d" alt="" />
                        <MyCarousel images={[
                            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1060&t=st=1677065393~exp=1677065993~hmac=729dc344a508766169a2b416398b728f981deace3b15a6bb6236c8036e503d4d",
                            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1060&t=st=1677065393~exp=1677065993~hmac=729dc344a508766169a2b416398b728f981deace3b15a6bb6236c8036e503d4d",
                            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1060&t=st=1677065393~exp=1677065993~hmac=729dc344a508766169a2b416398b728f981deace3b15a6bb6236c8036e503d4d"
                        ]} displacmentImage="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1060&t=st=1677065393~exp=1677065993~hmac=729dc344a508766169a2b416398b728f981deace3b15a6bb6236c8036e503d4d"/>
                        <a
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-900 font-bold -50 hover:-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                            href="#"
                        >
                            Watch Video
                        </a>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-1/2 -100">
                        <div className="h-full  rounded-b-3xl" />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-1/2 -100" />
                </div>
            </div>
        </section>

    )
}