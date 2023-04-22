const express = require('express');
const Ad = require('../models/Ad');
const Company = require('../models/Company');

const router = express.Router();

router.get('/', async (req, res) => {
  const { query } = req.query;

  try {
    // Search for ads that match the query
    const ads = await Ad.aggregate([
      {
        $lookup: {
          from: 'companies',
          localField: 'companyId',
          foreignField: '_id',
          as: 'company',
        },
      },
      {
        $unwind: '$company',
      },
      {
        $match: {
          $or: [
            { 'company.name': { $regex: query, $options: 'i' } },
            { primaryText: { $regex: query, $options: 'i' } },
            { headline: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          companyId: 1,
          primaryText: 1,
          headline: 1,
          description: 1,
          CTA: 1,
          imageUrl: 1,
          companyName: '$company.name',
          companyUrl: '$company.url',
        },
      },
    ]);

    res.json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
