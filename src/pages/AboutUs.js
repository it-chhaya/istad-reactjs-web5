const AboutUs = () => {
	return (
		<main>
			<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="0"
						class=""
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="1"
						aria-label="Slide 2"
						class=""></button>
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="2"
						aria-label="Slide 3"
						class="active"
						aria-current="true"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item">
						<svg
							class="bd-placeholder-img"
							width="100%"
							height="100%"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							preserveAspectRatio="xMidYMid slice"
							focusable="false">
							<rect width="100%" height="100%" fill="#777"></rect>
						</svg>

						<div class="container">
							<div class="carousel-caption text-start">
								<h1>Example headline.</h1>
								<p>
									Some representative placeholder content for the first slide of
									the carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="#">
										Sign up today
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item active carousel-item-start">
						<div class="container">
							<div class="carousel-caption">
								<h1>Another example headline.</h1>
								<p>
									Some representative placeholder content for the second slide
									of the carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="#">
										Learn more
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item carousel-item-next carousel-item-start">
						<div class="container">
							<div class="carousel-caption text-end">
								<h1>One more for good measure.</h1>
								<p>
									Some representative placeholder content for the third slide of
									this carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="#">
										Browse gallery
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>

			<div class="container marketing">
				<div class="row">
					<div class="col-lg-4">
						<h2>Heading</h2>
						<p>
							Some representative placeholder content for the three columns of
							text below the carousel. This is the first column.
						</p>
						<p>
							<a class="btn btn-secondary" href="#">
								View details »
							</a>
						</p>
					</div>
					<div class="col-lg-4">
						<h2>Heading</h2>
						<p>
							Another exciting bit of representative placeholder content. This
							time, we've moved on to the second column.
						</p>
						<p>
							<a class="btn btn-secondary" href="#">
								View details »
							</a>
						</p>
					</div>
					<div class="col-lg-4">
						<h2>Heading</h2>
						<p>
							And lastly this, the third column of representative placeholder
							content.
						</p>
						<p>
							<a class="btn btn-secondary" href="#">
								View details »
							</a>
						</p>
					</div>
				</div>

				<hr class="featurette-divider" />

				<div class="row featurette">
					<div class="col-md-7">
						<h2 class="featurette-heading">
							First featurette heading.{' '}
							<span class="text-muted">It’ll blow your mind.</span>
						</h2>
						<p class="lead">
							Some great placeholder content for the first featurette here.
							Imagine some exciting prose here.
						</p>
					</div>
					<div class="col-md-5"></div>
				</div>

				<hr class="featurette-divider" />

				<div class="row featurette">
					<div class="col-md-7 order-md-2">
						<h2 class="featurette-heading">
							Oh yeah, it’s that good.{' '}
							<span class="text-muted">See for yourself.</span>
						</h2>
						<p class="lead">
							Another featurette? Of course. More placeholder content here to
							give you an idea of how this layout would work with some actual
							real-world content in place.
						</p>
					</div>
					<div class="col-md-5 order-md-1"></div>
				</div>

				<hr class="featurette-divider" />

				<div class="row featurette">
					<div class="col-md-7">
						<h2 class="featurette-heading">
							And lastly, this one. <span class="text-muted">Checkmate.</span>
						</h2>
						<p class="lead">
							And yes, this is the last block of representative placeholder
							content. Again, not really intended to be actually read, simply
							here to give you a better view of what this would look like with
							some actual content. Your content.
						</p>
					</div>
					<div class="col-md-5"></div>
				</div>

				<hr class="featurette-divider" />
			</div>

			<footer class="container">
				<p class="float-end">
					<a href="#">Back to top</a>
				</p>
				<p>
					© 2017–2021 Company, Inc. · <a href="#">Privacy</a> ·{' '}
					<a href="#">Terms</a>
				</p>
			</footer>
		</main>
	)
}

export default AboutUs
