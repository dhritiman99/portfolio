import { TProject } from "../types/project";


export const projects: TProject[] = [
	{
		title: 'Movie Discovery website',
		desc: 'Movie Discovery website using TMDB API. Users can search movies, by genre, language, submit reviews and view movie details',
		git_url: 'https://github.com/dhritiman99/movie_website',
		live_url: 'https://movie-website-rust-two.vercel.app/'
	},
	{
		title: 'Weather App Dashboard',
		desc: 'Displays current Weather in a dashboard, based on users location',
		git_url: 'https://github.com/dhritiman99/weather_forecast',
		live_url: 'https://weather-forecast-beta-nine.vercel.app/weather'
	},
	{
		title: 'Helmet detection using YOLO OpenCV',
		desc: `Helmet detection using YOLO OpenCV 
		Developed a YOLOv8-based system for detecting motorcycle riders, helmet violations, and 
		license plates from video streams, with custom model training and violation tracking.`,
		git_url: 'https://github.com/dhritiman99/helmet_and_license_plate_detection_yolo'
	},
];
