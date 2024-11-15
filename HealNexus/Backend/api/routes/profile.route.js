import express from 'express';
import verifyToken from '../../middleware/verifyToken.js';
import {
  createAdminProfile,
  updateAdminProfile,
  getAdminProfile,
  createPatientProfile,
  updatePatientProfile,
  getPatientProfile,
  createDoctorProfile,
  updateDoctorProfile,
  getDoctorProfile,
  createLabTechnicianProfile,
  updateLabTechnicianProfile,
  getLabTechnicianProfile,
  createPharmacistProfile,
  updatePharmacistProfile,
  getPharmacistProfile,
} from '../controllers/profile.controller.js';

const router = express.Router();

router.post('/create-admin', verifyToken, createAdminProfile);
router.put('/update-admin/:id', verifyToken, updateAdminProfile);
router.get('/get-admin/:id', verifyToken, getAdminProfile);

router.post('/create-patient', verifyToken, createPatientProfile);
router.put('/update-patient/:id', verifyToken, updatePatientProfile);
router.get('/get-patient/:id', verifyToken, getPatientProfile);

router.post('/create-doctor', verifyToken, createDoctorProfile);
router.put('/update-doctor/:id', verifyToken, updateDoctorProfile);
router.get('/get-doctor/:id', verifyToken, getDoctorProfile);

router.post('/create-lab-technician', verifyToken, createLabTechnicianProfile);
router.put('/update-lab-technician/:id', verifyToken, updateLabTechnicianProfile);
router.get('/get-lab-technician/:id', verifyToken, getLabTechnicianProfile);

router.post('/create-pharmacist', verifyToken, createPharmacistProfile);
router.put('/update-pharmacist/:id', verifyToken, updatePharmacistProfile);
router.get('/get-pharmacist/:id', verifyToken, getPharmacistProfile);

export default router;
