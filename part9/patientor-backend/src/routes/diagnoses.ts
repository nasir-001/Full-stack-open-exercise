/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import diagnosesService from '../services/diagnoseService';
import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const diagnoses = diagnosesService.getDiagnoses();
  res.send(diagnoses);
});

export default router;