import TopPageInfo from "./components/TopPageInfo";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<div id="main">
			<TopPageInfo />

			<NavigationBar />

			<Footer />

			<script src="/js/jquery-1.11.0.min.js"></script>
			<script src="/js/jquery-migrate-1.2.1.min.js"></script>
			<script src="/js/bootstrap.bundle.min.js"></script>
			<script src="/js/templatemo.js"></script>
			<script src="/js/custom.js"></script>
		</div>
	);
}

export default App;
