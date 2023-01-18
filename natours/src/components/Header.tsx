import Logo from "../components/logo/Logo";

function Header() {
	return (
		<div className="container">
			<div className="header">
				<Logo />
				<h1 className="heading-primary">
					<span className="heading-primary--main">Outdoors</span>
					<span className="heading-primary--sub">is where life happens</span>
				</h1>
			</div>
		</div>
	);
}
export default Header;
