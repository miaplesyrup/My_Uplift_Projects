import "../assets/css/landing.css";
import ItineraryCard from "../components/globals/ItineraryCard";

const Landing = ({ allTours }) => {
	const showItineraryCard = allTours.map((tour, index) => <ItineraryCard key={index} tour={tour} />)

	document.title = "Welcome to TRIPnerary";
	return (
		<main id="mainWrapper">
			<div className="container">

				<section id="itineraryList">
					{showItineraryCard}
				</section>

			</div>
		</main>
	)
}

export default Landing;