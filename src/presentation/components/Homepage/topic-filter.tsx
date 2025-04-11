import React, { useState } from "react";
import { Form } from "../common/form";
import { FilterButton } from "../common/filter-button";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.svg";
import { Button } from "../common/button";
import { Checkbox, Divider } from "antd";
import FilterIcon from "../../static/filter-icon.svg";
export const TopicFilter = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
    setVisible(false);
    form.resetFields();
  };

  return (
    <>
      <FilterButton
        text={
          <div className="flex gap-2 px-3 py-2">
            <div>Chủ đề</div>
            <img src={FilterIcon} />
          </div>
        }
        className="bg-red3 drop-shadow-red3 text-sm"
        onClick={() => setVisible(true)}
      />
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute left-[15px] right-[15px] top-[20px] flex items-center text-center">
                <span className="font-title flex-1">Chủ đề</span>
                <div
                  className="absolute right-0 ml-auto size-[24px]"
                  onClick={() => setVisible(false)}
                >
                  <img src={CloseIcon} alt="" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          swipeToClose
          unmountOnClose
          height={"50%"}
        >
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            className="flex flex-1 flex-col gap-5 px-5"
            onFinishFailed={(value) => console.log(value)}
          >
            <Form.Item name="time" noStyle>
              <Checkbox.Group>
                <div className="flex w-full flex-col gap-3">
                  {options.map((option, index) => (
                    <React.Fragment key={index}>
                      <Checkbox
                        value={option.value}
                        className="custom-checkbox"
                      >
                        <div className="text-base font-normal">
                          {option.label}
                        </div>
                      </Checkbox>
                      {index < options.length - 1 && (
                        <Divider className="m-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </Checkbox.Group>
            </Form.Item>
          </Form>
          <div className="w-full px-4 pb-[24px]">
            <Button
              text={
                <div className="text-base font-medium text-white">Xác nhận</div>
              }
              className="drop-shadow-greenBtn w-full bg-primary-gradient"
              onClick={() => form.submit()}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const options = [
  { label: "Chọn tất cả", value: "0" },
  { label: "Ca lâm sàng", value: "1" },
  { label: "Bài báo khoa học", value: "2" },
  { label: "Hướng dẫn điều trị", value: "3" },
];
