import React from 'react'

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <header className="relative w-full h-screen">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline src='https://www.aksharaaschool.edu.np/assets/aksharaa-space.mp4' />
            </header>
            {/* 1st Section */}
            <section className='relative w-full min-h-screen py-16 px-4 md:px-8 lg:px-0 overflow-hidden'>
                <img src='https://www.aksharaaschool.edu.np/assets/images/philosophy-bg.png' className='absolute top-0 left-0 w-full h-full object-cover' alt='Philosophy background' />
                <div className='relative z-10 max-w-7xl mx-auto'>
                    <h1 className="text-blue-900 text-[34px] font-bold leading-tight mb-8 text-center">
                        OUR PHILOSOPHY <span className="text-green-500">AND APPROACH</span>
                    </h1>
                    <div className='lg:container mx-auto flex flex-col lg:flex-row gap-8 items-start'>
                        <div className='lg:w-2/3 p-4'>
                            <p className='text-gray-800 text-[15px] font-[400] leading-[28px] mb-8 text-justify'>
                                Aksharaa School embraces a student-centered constructivist philosophy of education. In pursuit of this, we make salient academic efforts to engage every student as a winner in autonomous educational endeavors, resulting in a feeling of being rewarded for valuable real-life skills. At Aksharaa, this philosophy is substantiated in the educational process built on transformative principles of education such as awareness, autonomy, and authenticity. These principles emphasize the importance of learning through self-engaged action, where every learner is recognized as having unique intelligence, reinforced by self-motivated initiatives stemming from individual differences. Our teaching methodologies address multiple intelligences of the whole group. We believe that holistic growth of a child is possible only through a Balanced Education System.
                            </p>
                            <button className='text-white py-2 px-6 rounded-full bg-[#ED1651] hover:bg-[#d11447] transition duration-300 text-[14px] font-md shadow-md hover:shadow-lg transform hover:-translate-y-1'>
                                Learn More
                            </button>
                        </div>
                        <div className='lg:w-1/3 flex flex-col gap-4'>
                            <div className='bg-[#389C5C] rounded-lg p-4 shadow-lg transform transition duration-300 hover:scale-105 overflow-hidden relative'>
                                <h2 className="inline-block border-b-2 border-[#FFCB08] mb-4 pb-2 text-white font-semibold text-[14px]">Mission</h2>
                                <p className='text-white text-[13px] leading-relaxed font-[400]'>
                                    Aksharaa School inculcates value-based education with academic excellence through collaboration with parents and other stakeholders to instill resilience, leadership skills and emotional intelligence in each learner.
                                </p>
                                <img src='https://www.aksharaaschool.edu.np/assets/images/mission.svg' className='absolute object-contain -bottom-9 -right-5 w-[8rem] opacity-40' alt="Mission icon" />
                            </div>
                            <div className='bg-[#389C5C] rounded-lg p-4 shadow-lg transform transition duration-300 hover:scale-105 overflow-hidden relative'>
                                <h2 className="inline-block border-b-2 border-[#FFCB08] mb-4 pb-2 text-white font-semibold text-[14px]">Vision</h2>
                                <p className='text-white text-[13px] leading-relaxed font-[400]'>
                                    Nurturing young learners to become lifelong learners globally competent and responsible citizens.
                                </p>
                                <img src='https://www.aksharaaschool.edu.np/assets/images/vision.svg' className='absolute object-contain -bottom-12 -right-5 w-[8rem] opacity-40' alt="Vision icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd Section */}
            <section className="py-16">
                <div className='lg:container mx-auto px-4'>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-blue-900 text-[34px] font-bold leading-tight mb-8 text-center">
                            Learn Through <span className="text-green-500">LRPA</span>
                        </h1>
                        <p className="text-gray-700 text-[15px] font-[400] leading-[28px] mb-6 text-justify">
                            We follow a unique model called LRPA. With the motto 'learning through fun', we make learning of core theories and values in the class fun filled and exciting. We believe in experiential learning. Through exploration, students are allowed to experience firsthand learning experiences. The classroom activities are not confined to the books. Through active participation, children learn to think critically over any situation, analyze rationally and draw logical conclusion. All classroom activities are supported by modern classroom technology and adequate resources. Students are allowed to use a wide range of electronic gadgets like computers, laptops, television and projectors to reinforce their subjective knowledge. Students carry out several project works in each subject, use various audio visual and print media, and use ample interaction with concerned seniors to strengthen the learnt theory. Ample educational field trips, national and international tours, talk shows are thus included as essentials in our curriculum. Through experiments, problem solving, model preparation, audio visual presentation, drama, role play, tutorial classes, virtual learning group works, conferences, they put the learnt concepts into practice and finally apply them or seek their application in real life situations.
                        </p>
                    </div>
                    <div className='mt-16 max-w-4xl mx-auto'>
                        {[
                            {
                                title: 'Continuous Assessment',
                                desc: 'Appropriate assessment of each task is done to monitor a child\'s skill in manipulating words, materials, ideas, and concepts. Such assessments help to determine whether the child has acquired language, mathematical, and social skills. This is done on a day-to-day basis through the use of a Continuous Assessment System (CAS) book.',
                                img: 'https://www.aksharaaschool.edu.np/assets/images/lrpa/ximg2.png.pagespeed.ic.r0ymcmjJfy.png',
                            },
                            {
                                title: 'Active Observation and Recording',
                                desc: "Through the intra and outside classroom activities, students' knowledge level, learning skills, extent of participation, research work, interest, psychomotor skills, etc are observed and recorded using specific criteria. Such observation helps to monitor the overall development of a child.",
                                img: 'https://www.aksharaaschool.edu.np/assets/images/lrpa/img1.png',
                            },
                            {
                                title: 'Assignment',
                                desc: 'Age appropriate specific assignments are assigned in each chapter. Written assignments, Project works and Research work are used as records on the development of specific skills related to instructional objectives or the attitude expressed or demonstrated by a student towards learning.',
                                img: 'https://www.aksharaaschool.edu.np/assets/images/lrpa/img3.png',
                            },
                            {
                                title: 'Time Bound Written Assessment',
                                desc: "At the end of each term, time bound written test is given in each subject. This will help the student to know their writing speed and be familiar with our traditional exam system.",
                                img: 'https://www.aksharaaschool.edu.np/assets/images/lrpa/img4.png',
                            },
                        ].map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row justify-between gap-8 mt-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                <div className="md:w-2/3">
                                    <h2 className='text-[18px] leading-[34px] font-semibold text-[#028102]'>{item.title}</h2>
                                    <p className='text-[15px] leading-[28px] font-[400] text-justify'>
                                        {item.desc}
                                    </p>
                                </div>
                                <img src={item.img} alt={item.title} className='object-contain w-full md:w-1/3 h-auto' />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* 3rd Section */}
            <section className="bg-[#F6FAFE] py-16">
                <div className='lg:container max-w-4xl mx-auto px-4'>
                    <h1 className="text-blue-900 text-[34px] font-bold leading-tight mb-8 text-center">
                        ECA AND CCA <span className="text-green-500">ACTIVITIES</span>
                    </h1>
                    <div className='md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <div className='mb-6'>
                                <h2 className='text-[18px] leading-[27px] font-semibold text-[#028102] mb-3'>ECA At Aksharaa</h2>
                                <p className='text-[15px] leading-[27px] font-[400] text-justify'>
                                    At Aksharaa, we believe in a holistic approach to education. Our dynamic framework integrates a wide range of Extra-Curricular Activities (ECAs) with mainstream academic endeavors. These activities are designed to nurture talents, foster creativity, and develop essential life skills. Some key ECAs that Aksharaa offers on school days include sports, music, art, drama, and various clubs catering to diverse interests.
                                </p>
                            </div>
                            <div className='mb-6'>
                                <h2 className='text-[18px] leading-[27px] font-semibold text-[#028102] mb-3'>CCA (Co-Curricular Activities)</h2>
                                <p className='text-[15px] leading-[28px] font-[400] text-justify'>
                                    Complementing our daily lesson plans, Aksharaa School provides numerous additional programs that align with the national curriculum. These Co-Curricular Activities (CCAs) include debate, quiz competitions, essay writing, spelling bees, and public speaking events. Conducted throughout the year, these activities are crucial for the holistic development of our students. They not only complement the government-designed curriculum but also foster leadership qualities, organizational skills, and the ability to cooperate and coordinate in various situations.
                                </p>
                            </div>
                            <button className='text-white py-2 px-8 rounded-full bg-[#ED1651] hover:bg-[#d11447] transition duration-300 text-[16px] font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1'>
                                Learn More
                            </button>
                        </div>
                        <div className='relative md:w-1/2 grid grid-cols-2 gap-4 mt-6 md:mt-0'>
                            <img src='https://www.aksharaaschool.edu.np/assets/images/activity1.jpg' alt="ECA Activity 1" className='w-full h-48 object-cover border-4 border-[#01547E]' />
                            <img src='https://www.aksharaaschool.edu.np/assets/images/activity2.jpg' alt="ECA Activity 2" className='w-full h-48 object-cover border-4 border-[#ED1651]' />
                            <img src='https://www.aksharaaschool.edu.np/assets/images/activity3.jpg' alt="CCA Activity 1" className='w-full h-48 object-cover border-4 border-[#40A163]' />
                            <img src='https://www.aksharaaschool.edu.np/assets/images/activity4.jpg' alt="CCA Activity 2" className='w-full h-48 object-cover border-4 border-[#FFCB08]' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='lg:container max-w-4xl mx-auto px-4'>
                    <h1 className="text-blue-900 text-[34px] font-bold leading-tight mb-8 text-center">
                        Latest <span className="text-green-500">News</span> & <span className="text-green-500">Events</span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 mt-16">
                        {/* Left side - Main blog */}
                        <div className="md:w-3/5">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                                <img src="https://placehold.co/600x400" alt="Main blog" className="w-full h-64 md:h-96 object-cover" />
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Main Blog Title</h2>
                                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <a href="#" className="text-blue-600 font-semibold hover:underline self-start mt-4">Read more</a>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Blog cards and View All */}
                        <div className="md:w-2/5">
                            <div className="flex justify-end mb-4">
                                <a href="#" className="text-blue-600 font-semibold hover:underline">View All News</a>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden flex">
                                        <img src={`https://placehold.co/200x200?text=Blog+${item}`} alt={`Blog ${item}`} className="w-1/3 object-cover" />
                                        <div className="p-2 flex flex-col justify-between w-2/3">
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-800 mb-1">Blog Title {item}</h3>
                                                <p className="text-gray-600 text-xs">Short description...</p>
                                            </div>
                                            <a href="#" className="text-blue-600 text-xs font-semibold hover:underline mt-auto">Read more</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className='w-full mx-auto px-4'>
                    <h2 className="text-[34px] font-bold text-center text-blue-900 mb-8">Our Location</h2>
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden shadow-md rounded-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113043.12234894096!2d85.2886569572973!3d27.69883021364786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb1b9a92d5f1a9%3A0x1f6f92b072e4780c!2sM9XC%2BGCV%2C%20Unnamed%20Road%2C%20Kageshwori%20Manohara%2044600!3m2!1d27.698862199999997!2d85.371012!5e0!3m2!1sen!2snp!4v1726915418738!5m2!1sen!2snp" 
                            className="absolute top-0 left-0 w-full h-full"
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Home
