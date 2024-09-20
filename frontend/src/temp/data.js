const packageReviews = [
    { id: 'PR001', date: '2023-01-15', name: 'Alice Johnson', email: 'alice@example.com', specialty: 'gold', rate: 5, review: 'Excellent service!', status: 'approve' },
    { id: 'PR002', date: '2023-01-20', name: 'Bob Smith', email: 'bob@example.com', specialty: 'silver', rate: 4, review: 'Very good experience.', status: 'approve' },
    { id: 'PR003', date: '2023-01-25', name: 'Charlie Brown', email: 'charlie@example.com', specialty: 'platinum', rate: 5, review: 'Top-notch quality!', status: 'approve' },
    { id: 'PR004', date: '2023-02-01', name: 'Dana White', email: 'dana@example.com', specialty: 'gold', rate: 3, review: 'Average service.', status: 'reject' },
    { id: 'PR005', date: '2023-02-05', name: 'Eve Davis', email: 'eve@example.com', specialty: 'silver', rate: 2, review: 'Not satisfied.', status: 'reject' },
    { id: 'PR006', date: '2023-02-10', name: 'Frank Miller', email: 'frank@example.com', specialty: 'platinum', rate: 4, review: 'Good, but could improve.', status: 'approve' },
    { id: 'PR007', date: '2023-02-15', name: 'Grace Lee', email: 'grace@example.com', specialty: 'gold', rate: 5, review: 'Highly recommend!', status: 'approve' },
    { id: 'PR008', date: '2023-02-20', name: 'Hank Wilson', email: 'hank@example.com', specialty: 'silver', rate: 3, review: 'Decent but pricey.', status: 'approve' },
    { id: 'PR009', date: '2023-03-01', name: 'Ivy Clark', email: 'ivy@example.com', specialty: 'platinum', rate: 5, review: 'Exceptional experience!', status: 'approve' },
    { id: 'PR010', date: '2023-03-05', name: 'Jack Brown', email: 'jack@example.com', specialty: 'gold', rate: 2, review: 'Not what I expected.', status: 'reject' },
    { id: 'PR011', date: '2023-03-10', name: 'Kathy Green', email: 'kathy@example.com', specialty: 'silver', rate: 4, review: 'Good quality overall.', status: 'approve' },
    { id: 'PR012', date: '2023-03-15', name: 'Liam Young', email: 'liam@example.com', specialty: 'platinum', rate: 1, review: 'Very disappointed.', status: 'reject' },
    { id: 'PR013', date: '2023-03-20', name: 'Mona Taylor', email: 'mona@example.com', specialty: 'gold', rate: 5, review: 'Fantastic service!', status: 'approve' },
    { id: 'PR014', date: '2023-03-25', name: 'Nina Martinez', email: 'nina@example.com', specialty: 'silver', rate: 3, review: 'It was okay.', status: 'approve' },
    { id: 'PR015', date: '2023-04-01', name: 'Oscar King', email: 'oscar@example.com', specialty: 'platinum', rate: 4, review: 'Very good, will come again.', status: 'approve' },
    { id: 'PR016', date: '2023-04-05', name: 'Paula Adams', email: 'paula@example.com', specialty: 'gold', rate: 2, review: 'Could use improvement.', status: 'reject' },
    { id: 'PR017', date: '2023-04-10', name: 'Quinn Baker', email: 'quinn@example.com', specialty: 'silver', rate: 5, review: 'Outstanding service!', status: 'approve' },
    { id: 'PR018', date: '2023-04-15', name: 'Ryan Scott', email: 'ryan@example.com', specialty: 'platinum', rate: 4, review: 'Very professional.', status: 'approve' },
    { id: 'PR019', date: '2023-04-20', name: 'Sophia Hill', email: 'sophia@example.com', specialty: 'gold', rate: 3, review: 'Not bad, but could be better.', status: 'approve' },
    { id: 'PR020', date: '2023-04-25', name: 'Tom Green', email: 'tom@example.com', specialty: 'silver', rate: 2, review: 'Did not meet my expectations.', status: 'reject' },
    { id: 'PR021', date: '2023-05-01', name: 'Uma Fisher', email: 'uma@example.com', specialty: 'platinum', rate: 5, review: 'I loved it!', status: 'approve' },
    { id: 'PR022', date: '2023-05-05', name: 'Vera James', email: 'vera@example.com', specialty: 'gold', rate: 4, review: 'Really good experience.', status: 'approve' },
    { id: 'PR023', date: '2023-05-10', name: 'Will Harris', email: 'will@example.com', specialty: 'silver', rate: 1, review: 'Very bad service.', status: 'reject' },
];
// specialty => gold / silver / platinum ; also id => PRXXX ; also 1 - 5 ; status => approve / reject

const instructorReviews = [
    { id: 'IR001', date: '2023-01-10', name: 'Emma Watson', email: 'emma@example.com', specialty: 'Alex Johnson', rate: 5, review: 'Outstanding instructor!', status: 'approve' },
    { id: 'IR002', date: '2023-01-15', name: 'James Smith', email: 'james@example.com', specialty: 'Mia Torres', rate: 4, review: 'Very engaging classes.', status: 'approve' },
    { id: 'IR003', date: '2023-01-20', name: 'Lily Chen', email: 'lily@example.com', specialty: 'Ryan Smith', rate: 3, review: 'Good, but could be more interactive.', status: 'approve' },
    { id: 'IR004', date: '2023-01-25', name: 'Noah Brown', email: 'noah@example.com', specialty: 'Jessica Lee', rate: 5, review: 'Absolutely fantastic!', status: 'approve' },
    { id: 'IR005', date: '2023-01-30', name: 'Olivia White', email: 'olivia@example.com', specialty: 'David Kim', rate: 2, review: 'Not very helpful.', status: 'reject' },
    { id: 'IR006', date: '2023-02-05', name: 'Ethan Green', email: 'ethan@example.com', specialty: 'Emily Garcia', rate: 4, review: 'Solid teaching style.', status: 'approve' },
    { id: 'IR007', date: '2023-02-10', name: 'Ava Johnson', email: 'ava@example.com', specialty: 'Chris Patel', rate: 5, review: 'Incredible instructor!', status: 'approve' },
    { id: 'IR008', date: '2023-02-15', name: 'Mason Lewis', email: 'mason@example.com', specialty: 'Sarah Brown', rate: 3, review: 'Average experience.', status: 'approve' },
    { id: 'IR009', date: '2023-02-20', name: 'Isabella Wilson', email: 'isabella@example.com', specialty: 'Mark Wilson', rate: 4, review: 'Really enjoyed the classes.', status: 'approve' },
    { id: 'IR010', date: '2023-02-25', name: 'Jackson Lee', email: 'jackson@example.com', specialty: 'Olivia Martinez', rate: 1, review: 'Very disappointing.', status: 'reject' },
    { id: 'IR011', date: '2023-03-01', name: 'Sophia Taylor', email: 'sophia@example.com', specialty: 'Daniel Nguyen', rate: 5, review: 'Fantastic at explaining concepts!', status: 'approve' },
    { id: 'IR012', date: '2023-03-05', name: 'Lucas Harris', email: 'lucas@example.com', specialty: 'Sophie Davis', rate: 4, review: 'Engaging and knowledgeable.', status: 'approve' },
    { id: 'IR013', date: '2023-03-10', name: 'Mia King', email: 'mia@example.com', specialty: 'Alex Johnson', rate: 2, review: 'Too strict with deadlines.', status: 'reject' },
    { id: 'IR014', date: '2023-03-15', name: 'Liam Lee', email: 'liam@example.com', specialty: 'Mia Torres', rate: 5, review: 'Best instructor ever!', status: 'approve' },
    { id: 'IR015', date: '2023-03-20', name: 'Ella Adams', email: 'ella@example.com', specialty: 'Ryan Smith', rate: 3, review: 'Decent but lacks enthusiasm.', status: 'approve' },
    { id: 'IR016', date: '2023-03-25', name: 'Charlotte Brown', email: 'charlotte@example.com', specialty: 'Jessica Lee', rate: 4, review: 'Great at making complex topics simple.', status: 'approve' },
    { id: 'IR017', date: '2023-04-01', name: 'Benjamin Taylor', email: 'benjamin@example.com', specialty: 'David Kim', rate: 1, review: 'Very unorganized.', status: 'reject' },
    { id: 'IR018', date: '2023-04-05', name: 'Abigail Johnson', email: 'abigail@example.com', specialty: 'Emily Garcia', rate: 5, review: 'Highly recommend her classes!', status: 'approve' },
    { id: 'IR019', date: '2023-04-10', name: 'James Wilson', email: 'jamesw@example.com', specialty: 'Chris Patel', rate: 4, review: 'Good content delivery.', status: 'approve' },
    { id: 'IR020', date: '2023-04-15', name: 'Zoe Miller', email: 'zoe@example.com', specialty: 'Sarah Brown', rate: 2, review: 'Could improve on feedback.', status: 'reject' },
    { id: 'IR021', date: '2023-04-20', name: 'Daniel Rodriguez', email: 'daniel@example.com', specialty: 'Mark Wilson', rate: 5, review: 'A true inspiration!', status: 'approve' },
];
// specialty => instructor name ; also id => IRXXX ; also rate 1 - 5 ; status => approve / reject

const instructors = [
    'Alex Johnson',
    'Mia Torres',
    'Ryan Smith',
    'Jessica Lee',
    'David Kim',
    'Emily Garcia',
    'Chris Patel',
    'Sarah Brown',
    'Mark Wilson',
    'Olivia Martinez',
    'Daniel Nguyen',
    'Sophie Davis'
];
// instructors

export default { packageReviews, instructorReviews, instructors }