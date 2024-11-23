import Link from "next/link";


const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House in the woods
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
        </p>
        <Link href="/services#short-videos">Read more 👈</Link>
      </div>
    );
  };
  
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House above the clouds
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and a
          unique living experience. It&apos;s a place where the sky meets home,
          and tranquility is a way of life.
        </p>
        <Link href="/services#long-videos">Read more 👈</Link>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Greens all over
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
        <Link href="/services#podcasts">Read more 👈</Link>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
        <Link href="/services#vsls-thumbnail">Read more 👈</Link>
      </div>
    );
  };
  
  const CARDS = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "/images/image1.webp",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "/images/image1.webp",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/images/image1.webp",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "/images/image1.webp",
    },
  ];


  
const CONTENT = [
    {
        title: "Legal Lounge",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/@Legal.Lounge"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Legal Lounge demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "Leon Hendrix",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GPuzEZxGs6M?si=MHuu2K_KC1X8rF9d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        ),
    },
    {
        title: "HIP Creative",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JRAnbadY-lI?si=Tyk10EAp3klBmbvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        ),
    },
    {
        title: "Magical AI",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uWdCJzQt-tM?si=GcN6vKEFG5w2_yUL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        ),
    },
    {
        title: "Kaleb McCullough",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jcajyXV13TU?si=hg6UhNf79Ya8z6LL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        ),
    },
    {
        title: "Luke Infinger",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/pgj_cPqTMqk?si=9X4Wzi5hxyXQEFSG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        ),
    },
    {
        title: "Versed",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/@Versedyoutube?&mute=1&loop=1&playlist=Versedyoutube"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Versed demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "PracticeBeacon",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/@YOUR_VIDEO_ID?&mute=1&loop=1&playlist=YOUR_VIDEO_ID" // Replace YOUR_VIDEO_ID with the actual ID if available
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="PracticeBeacon demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "Kersey Law Firm",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/@JamahlKersey?&mute=1&loop=1&playlist=JamahlKersey"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Kersey Law Firm demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "Trap Rose Lore",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/@TrapLoreRoss?&mute=1&loop=1&playlist=TrapLoreRoss"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Trap Rose Lore demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
];

const DUMMYCONTENT = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
            commodo et labore dolore commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia qui
            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
            Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "React",
      image:
        "/images/image1.webp"
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Changelog",
      image:
        "/images/image1.webp"
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Launch Week",
      image:
        "/images/image1.webp"
    },
  ];
  
  const TESTIMONIALS = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src:"/images/image1.webp"
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src:"/images/image1.webp"
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src:"/images/image1.webp"
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src:"/images/image1.webp"
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src:"/images/image1.webp"
    },
  ];

  const NAV_ITEMS = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "Feature Section",
      link: "/#feature-section",
    },
    {
      name: "Our Clients",
      link: "/#our-clients",
    },
    {
      name: "Portfolio",
      link: "/#portfolio",
    },
    {
      name: "Reviews",
      link: "/#reviews",
    },
    {
      name: "Case Studies",
      link: "/#case-studies",
    },
    {
      name: "FAQ",
      link: "/#faq",
    },
    // {
    //   name: "Book Your Ticket",
    //   link: "/#book-your-ticket",
    // },
  ];

  const CASE_STUDIES = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  const FAQ_DATA = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase as long as it is in its original condition and packaging."
    },
    {
      id: 2,
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by location."
    },
    {
      id: 3,
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website."
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and other secure payment methods, depending on your location."
    }
  ];
  


  export { CARDS , CONTENT , DUMMYCONTENT , TESTIMONIALS , NAV_ITEMS , CASE_STUDIES, FAQ_DATA}