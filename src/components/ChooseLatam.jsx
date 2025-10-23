import { MainHeader2 } from './layouts/Headers'
import equiposmi from '/assets/equiposmi.webp'
import hemocult from '/assets/hemocult.webp'
import academia from '/assets/academia.png'
import { Link } from 'react-router-dom'

export default function ChooseLatam() {
	return (
		<>
			<MainHeader2 />
			<section>
				<h1 className="text-center text-2xl md:text-4xl font-bold my-20">
					ELIJA EL CURSO QUE DESEA REALIZAR:
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-3 text-center justify-center align-middle mm md:px-8 font-montserrat-semibold mb-5">
					<div className="flex justify-center">
						<Link to="https://elearninglatam.elearningclinicalbmxsystems.com/login">
							<img
								src={equiposmi}
								alt="Equipos para microbioligía bioMérieux"
								className="px-4 md:w-[630px] md:h-[390px]"
								width="auto"
								height="auto"
							/>
						</Link>
					</div>

					<div className="flex justify-center">
						<Link to="/welcome">
							<img
								src={hemocult}
								alt="Buenas prácticas en hemocultivos"
								className="mt-6 px-4 sm:mt-0 md:w-[580px] md:h-[390px]"
								width="auto"
								height="auto"
							/>
						</Link>
					</div>
					<div className="flex justify-center">
						<Link to="https://e-learning-real-oaud.vercel.app/">
							<img
								src={academia}
								alt="Buenas prácticas en hemocultivos"
								className="mt-6 px-4 sm:mt-0 md:w-[580px] md:h-[390px]"
								width="auto"
								height="auto"
							/>
						</Link>
					</div>
				</div>
				<div className="content-center fixed bottom-0 bg-gradient-to-r from-[#FFDF05] from-35% via-[#369537] via-79% to-[#369537] w-full h-[10px]" />
			</section>
		</>
	)
}
