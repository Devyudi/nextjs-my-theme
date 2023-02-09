import nc from "next-connect";
import { ErrorHandler }  from '@moonlay/handlers'
import {Upload} from "@moonlay/modules";


export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(
    
);
const uploadFile = Upload.single('file');

handler
    .use(uploadFile)
    .post(async (req,res)=> {
        console.log("req.file", req.file);
        console.log("req.body", req.body);
        let url = "http://" + req.headers.host;
        let filename = req.file.filename;

        res.status(200).send({
            url,filename,
        message:'ok!',

    });
})

export default handler