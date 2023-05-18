import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-16 top-52 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 mt-28 space-y-5'>
                    <h2 className='text-xl text-orange-600 font-bold'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified<br/> & of experience<br/>
                     in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>

                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;