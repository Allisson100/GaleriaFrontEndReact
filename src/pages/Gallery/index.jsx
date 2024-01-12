import { useEffect } from "react";
import { getImagesDbGallery } from "../../store/reducers/imagesFromDB";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../components/Image";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { GalleryContainer } from "./styes";
import { addMessage } from "../../store/reducers/toastMessage";

export default function Gallery () {

    const dispatch = useDispatch()

    const imagesDB = useSelector(state => state.imagesDB)

    useEffect(() => {

        if(imagesDB.length === 0) {
            dispatch(getImagesDbGallery())
        } else {
            dispatch(addMessage([]))
        }
        
    }, [dispatch])

    return (
        <GalleryContainer>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='15px'>
                    {imagesDB.map((image) => (
                        <Image key={image._id} src={image.src} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </GalleryContainer>
        
    )
}