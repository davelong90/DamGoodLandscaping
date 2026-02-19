export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Greenville, SC',
    rating: 5,
    text: "Dave completely transformed our front yard. We had overgrown beds and patchy mulch that had been embarrassing us for years. After one visit, the yard looks better than it did when we moved in. He showed up exactly when he said he would, worked clean, and the price was fair. Will absolutely be using him every season.",
  },
  {
    name: 'James R.',
    location: 'Simpsonville, SC',
    rating: 5,
    text: "Hired Dave for a full spring cleanup after a rough winter. He hauled out more debris than I thought possible, re-edged all the beds, and laid fresh mulch throughout. The yard went from disaster to showroom in one afternoon. Neighbors have already asked for his number.",
  },
  {
    name: 'Linda K.',
    location: 'Greer, SC',
    rating: 5,
    text: "I needed someone who would show up reliably and do quality work. Dave checks both boxes. He has been maintaining our lawn for two seasons now and it has never looked healthier. The before-and-after photos he sent after the first cleanup were unbelievable. Highly recommend.",
  },
];
