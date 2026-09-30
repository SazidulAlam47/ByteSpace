import logo1 from "../../../assets/icons/logos/logo1.svg";
import logo2 from "../../../assets/icons/logos/logo2.svg";
import logo3 from "../../../assets/icons/logos/logo3.svg";
import svg4 from "../../../assets/icons/logos/svg4.svg";
import logo5 from "../../../assets/icons/logos/logo5.svg";

const PartnersSection = () => {
    return (
        <section className="bg-[#F8F9FA] py-12">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="flex items-center justify-between gap-12 opacity-60">
                    <img src={logo1} alt="Partner Logo 1" className="h-8 md:h-10 object-contain" />
                    <img src={logo2} alt="Partner Logo 2" className="h-8 md:h-10 object-contain" />
                    <img src={logo3} alt="Partner Logo 3" className="h-8 md:h-10 object-contain" />
                    <img src={svg4} alt="Partner Logo 4" className="h-8 md:h-10 object-contain" />
                    <img src={logo5} alt="Partner Logo 5" className="h-8 md:h-10 object-contain" />
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
