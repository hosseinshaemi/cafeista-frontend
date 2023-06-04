import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import BasketObj from '../BasketObj/BasketObj';


const OrderConfirmationModal = ({ isOpen, handleCloseModal }) => {
    const [userbasketlist, setuserbasketlist] = useState([
        {
            image: 'https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1162.jpg?size=626&ext=jpg&ga=GA1.1.1963387681.1683956796&semt=sph',
            title: 'شیک شکلات',
            count: 1,
        },
        {
            image: 'https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1162.jpg?size=626&ext=jpg&ga=GA1.1.1963387681.1683956796&semt=sph',
            title: 'شیک شکلات',
            count: 1,
        },
        {
            image: 'https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1162.jpg?size=626&ext=jpg&ga=GA1.1.1963387681.1683956796&semt=sph',
            title: 'شیک شکلات',
            count: 1,
        },
        {
            image: 'https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1162.jpg?size=626&ext=jpg&ga=GA1.1.1963387681.1683956796&semt=sph',
            title: 'شیک شکلات',
            count: 1,
        },
        {
            image: 'https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1162.jpg?size=626&ext=jpg&ga=GA1.1.1963387681.1683956796&semt=sph',
            title: 'شیک شکلات',
            count: 1,
        },
        {
            image: 'https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1162.jpg?size=626&ext=jpg&ga=GA1.1.1963387681.1683956796&semt=sph',
            title: 'شیک شکلات',
            count: 1,
        },
        {
            image: 'https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1162.jpg?size=626&ext=jpg&ga=GA1.1.1963387681.1683956796&semt=sph',
            title: 'شیک شکلات',
            count: 1,
        },



    ])

  
    const body = (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                maxHeight: 400,
                overflow: 'auto',
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: 24,
                p: 4,
            }}
        >
            <div>
                {userbasketlist.map((item) => (
                    <BasketObj image={item.image} title={item.title} count={item.count} />
                ))}
            </div>

            <div style={{ direction: "rtl", margin: "0 5%" }}>
                <p style={{ color: 'rgb(140 140 140)', fontFamily: 'IRANSansXLight', fontSize: '20px' }}>توضیحات</p>
                <p style={{ color: 'black', fontFamily: 'IRANSansXLight', fontSize: '15px' }}> این یک متن آماده است این یک متن آماده است این یک متن آماده است این یک متن آماده است این یک متن آماده است این یک متن آماده است این یک متن آماده است این یک متن آماده است این یک متن آماده است</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "30px" }}>
                    <button style={{ width: 130, height: 45, borderRadius: 15, bottom: '5%', fontFamily: "IRANSansXLight", fontSize: 15 }}>تایید</button>
                    <button style={{ width: 130, height: 45, borderRadius:15, bottom: '5%', fontFamily: "IRANSansXLight", fontSize: 15 }}>لغو</button>

                </div>
            </div>
        </Box>
    );
    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {body}
        </Modal>
    );
}
export default OrderConfirmationModal;