import cloudinary from "cloudinary";

export default setUpcloudinary = () => {
    cloudinary.config({
        cloud_name: 'dg16brf0l',
        api_key: '192597396342249',
        api_secret: 'W4_6n6lGPlXfLM8l8A_yIJUDbaM'
    });
}