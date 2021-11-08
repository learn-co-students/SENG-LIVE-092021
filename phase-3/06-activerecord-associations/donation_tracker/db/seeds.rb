feeding_america = Organization.create(name: 'Feeding America')
salvation_army = Organization.create(name: 'Salvation Army')
red_cross = Organization.create(name: 'American National Red Cross')

santa = Donor.create(name: "Santa Baby", email: "santa_baby@northpole.com")
grinch = Donor.create(name: "Mr. Grinch", email: "stealingxmas@haha.com")
charlie = Donor.create(name: "Charlie Brown", email: "c_brown@peanuts.com")

Donation.create(amount: 100.00, date: DateTime.new(2021, 10, 31), organization_id: feeding_america.id, donor_id: santa.id)
Donation.create(amount: 600.00, date: DateTime.new(2021, 10, 27), organization_id: feeding_america.id, donor_id: santa.id)
Donation.create(amount: 1000.00, date: DateTime.new(2021, 11, 1), organization_id: salvation_army.id, donor_id: grinch.id)
Donation.create(amount: 500.00, date: DateTime.new(2021, 9, 2), completed: true, organization_id: salvation_army.id, donor_id: grinch.id)
Donation.create(amount: 750.00, date: DateTime.new(2021, 6, 6), completed: false, organization_id: red_cross.id, donor_id: grinch.id)
Donation.create(amount: 20.00, date: DateTime.new(2021, 11, 02), organization_id: red_cross.id, donor_id: charlie.id)