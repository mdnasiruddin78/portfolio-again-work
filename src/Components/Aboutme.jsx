import image from '../assets/2.png';

const Aboutme = () => {
    return (
        <div id='aboutMe' className="grid lg:grid-cols-2 grid-cols-1 items-center gap-5 lg:py-10 py-6">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h3 className="text-4xl font-bold text-white">ABOUT ME</h3>
                <p className="text-[#959595]">Hello, I am <span className="text-[#FD6F00] font-bold">MD NASIR UDDIN ANIK </span>. I always like to introduce about my self as a web developer. I have chose it as a profession. I also worked in different places for the job. But, I found peace in that. I love to coding and make beautiful projects. In the programming life, we are always facing issues. But, issues will be solve when we can try and do hard work. Last time, when complete a website by perseverance then it is the best happy moment of every programmers life. My programming journey was not easy. But, I have never give up. I was started my programming journey with family, electrical issues and another. But, i wanted to be a web developer. Then i ignored the issues and continued my journey. Finally, i also completed a course on Programming Hero. Outside of programming, i love to play cricket. And it is my favorite sport.</p>
            </div>
        </div>
    );
};

export default Aboutme;