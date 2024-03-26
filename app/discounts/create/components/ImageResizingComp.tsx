import React,  { useState } from 'react';

import { Form, Upload } from 'antd';

import type { GetProp, UploadFile, UploadProps,  } from 'antd';
import ImgCrop from 'antd-img-crop';

  
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

  
const ImageResizingComp = ({ changeCreateObject }: any) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        changeCreateObject(newFileList);
    };
    
      // const onPreview = async (file: UploadFile) => {
      //   let src = file.url as string;
      //   if (!src) {
      //     src = await new Promise((resolve) => {
      //       const reader = new FileReader();
      //       reader.readAsDataURL(file.originFileObj as FileType);
      //       reader.onload = () => resolve(reader.result as string);
      //     });
      //   }
      //   const image = new Image();
      //   image.src = src;
      //   const imgWindow = window.open(src);
      //   imgWindow?.document.write(image.outerHTML);
      // };

    


    return (
        <>
                    <Form.Item label="Upload" required  valuePropName="fileList">
                        <ImgCrop rotationSlider>
                            <Upload
                                // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                // onPreview={onPreview}
                            >
                                {fileList.length < 1 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>

        </>
    );
};

export default ImageResizingComp;

