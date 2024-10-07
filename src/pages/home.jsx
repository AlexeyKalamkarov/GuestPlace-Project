import Header from "../components/header/header";
import Banner from '../components/banner/banner';
import Cards from '../components/cards/cards';
import Footer from "../components/footer/footer";
import Popular from "../components/popular/popular";

const Home = () => {
    return ( 
        <div className="">
            <Header/>
        
            <Banner/>
            <Cards/>
            <Popular/>
            <Footer/>
        </div>
     );
}
 
export default Home;