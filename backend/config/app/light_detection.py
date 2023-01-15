import cv2
import numpy as np
import time


def img_estim(img, thrshld):
    is_light = np.mean(img) > thrshld
    print(np.mean(img))
    return 'light' if is_light else 'dark'


cap=cv2.VideoCapture('http://192.420.169.69:4747/video')

success, img = cap.read()
print(img_estim(img, 100))
 
