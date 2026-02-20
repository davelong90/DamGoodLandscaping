export interface Service {
  name: string;
  slug: string;
  description: string;
  details: string;
}

export const services: Service[] = [
  {
    name: 'Lawn Maintenance',
    slug: 'lawn-maintenance',
    description: 'Regular mowing, edging, and cleanup to keep your lawn looking sharp all season.',
    details:
      'Weekly or bi-weekly service includes mowing, trimming along edges and obstacles, blowing clippings from hard surfaces, and a general cleanup pass. Consistent cuts mean a healthier, thicker lawn.',
  },
  {
    name: 'Mulching',
    slug: 'mulching',
    description: 'Fresh mulch beds that suppress weeds, retain moisture, and give your yard a polished look.',
    details:
      'We source quality hardwood or dyed mulch, install a clean edge, and apply mulch at the right depth — enough to suppress weeds without smothering roots. Beds stay neat and healthy all season.',
  },
  {
    name: 'Bed Edging',
    slug: 'bed-edging',
    description: 'Crisp, clean edges that define your beds and give your landscape a finished, professional appearance.',
    details:
      'Using a steel spade or mechanical edger, we cut clean lines between turf and beds. Proper edging prevents grass from creeping into your planted areas and makes the whole yard look intentional.',
  },
  {
    name: 'Shrub Trimming',
    slug: 'shrub-trimming',
    description: 'Shaped shrubs and hedges that frame your home and improve curb appeal.',
    details:
      'We trim overgrown shrubs into clean, even shapes — whether that is a formal hedge line or a natural rounded form. Proper trimming encourages dense, healthy growth and keeps plants in proportion.',
  },
  {
    name: 'Yard Cleanups',
    slug: 'yard-cleanups',
    description: 'Full-property cleanups that remove leaves, debris, and overgrowth so your yard looks its best.',
    details:
      'From post-storm debris to seasonal leaf removal, we haul away what nature leaves behind. Great for spring kick-off cleanups or fall prep before winter.',
  },
  {
    name: 'Seasonal Work',
    slug: 'seasonal-work',
    description: 'Spring and fall prep services to get your yard ready for the season ahead.',
    details:
      'Spring cleanup, pre-season fertilizing recommendations, fall leaf removal, and winterization prep. We set your yard up for success each time the season changes.',
  },
  {
    name: 'Patios',
    slug: 'patios',
    description: 'Custom paver and stone patio installations that extend your living space outdoors.',
    details:
      'From simple flagstone pads to full paver patio builds, we handle site prep, base compaction, layout, and installation. A well-built patio adds usable square footage to your property and dramatically improves curb appeal and resale value.',
  },
];
