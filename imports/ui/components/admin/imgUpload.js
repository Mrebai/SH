import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import cloudinary from "cloudinary";
import {Image} from 'cloudinary-react'
import setUpcloudinary  from '../../cloudinaryInit'



class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        setUpcloudinary()
    }
    handleDrop = files => {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "x7ne7zx3"); // Replace the preset name with your own
            formData.append("api_key", "192597396342249"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
                headers: {"X-Requested-With": "XMLHttpRequest"},
            }).then(response => {
                const data = response.data;
                this.props.setImagArray( this.props.images.concat( data.public_id ));
                console.log(this.props.images);
            })
        });

    };

    render() {
        return (
            <div>



                <div className="form-group row">


                    <div className="col-sm-12" id='itemImg'>
                        <Dropzone
                            className="dropzone"
                            onDrop={this.handleDrop}
                            multiple
                            accept="image/*"
                        >
                            <p>Drop your images or click here to upload</p>
                        </Dropzone>
                    </div>
                </div>


                <div className="container">
                    <div className="d-flex flex-row addItemImgContainer">
                        {console.log(this.props.images)}

                        {
                            (  this.props.images.length )?(
                                    this.props.images.map((image,i) => {
                                        return(

                                            <div className='imgContainer' key={i} >

                                                <Image className="imgPrev" cloudName="dg16brf0l" publicId={image} />
                                                <button className=" btn btn-link mainImg" onClick={()=> {this.props.setImagArray(this.props.images.filter(a => a!== image))}} > <i className="far fa-window-close"></i></button>
                                                {(this.props.mainImg !== image)?
                                                    <button className=" btn link mainImg" onClick={()=> {this.props.setMainImg(image)}}> <i className="fas fa-thumbtack"></i></button>
                                                    : <div></div> }
                                            </div>
                                        )
                                    })
                                ):
                                <div></div>

                        }

                    </div>
                </div>
            </div>




        )
    }
}

export default ImageUpload