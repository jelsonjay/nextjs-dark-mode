export default function Home() {
	return (
		<div className='container'>
			<nav>
				<div className='logo'>LOGO</div>
				<div>
					<form action='#'>
						<label className='switch'>
							<input type='checkbox' />
							<span className='slider'></span>
						</label>
					</form>
				</div>
			</nav>
			<section>
				<div className='hero'>
					<h1>Welcome to the nextjs reactframewor</h1>
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
						quidem, optio laudantium, reiciendis rem similique fugit ipsa
						expedita beatae eligendi adipisci minima. Deleniti similique iure
						officiis inventore in, incidunt debitis!
					</h3>
					<p>
						please click here{' '}
						<span>
							{' '}
							<a href='#'>Subscribe</a>{' '}
						</span>
						Dolor quidem, optio laudantium, reiciendis rem similique fugit ipsa
						expedita beatae eligendi adipisci minima. Deleniti similique iure
						officiis inventore in, incidunt debitis!
					</p>
					<button className='btn'>Contact</button>
				</div>
			</section>
		</div>
	);
}
