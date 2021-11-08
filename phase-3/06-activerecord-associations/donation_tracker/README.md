# Lecture Deliverables:

#### Domain model:

1. What models do we need?
   - Donation
   - Organization
   - Donor
2. What are the associations between the models?
   - Donation: belongs_to :donor, belongs_to :organization, join table
   - Organization: has_many :donations, has_many :donors, through :donations
   - Donor: has_many :donations, has_many :organizations through :donations
3. What columns and types will each models respective table need?
   - donations: amount: integer, date: datetime, completed: boolean, organization_id: integer, donation_id: integer
   - organizations: name:string
   - donors: name: string, email: string
4. What behaviors would we like to provide to each model?

   - organization: total amount raised

   - donor: return all orgs donated to

### Action Items:

1. Create the donations, organizations and donors table.
2. Add the following seed data to the `seeds.rb` file:

```rb
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
```

#### Using Active Record methods, perform the following actions:

1. Return an array of all donation records
2. Return Donor with id 2
3. Return the organization with the name "Feeding America"
4. Create a donation using the new method.
5. Return all organizations alphabetized by name. 
6. Return all the organizations Grinch has donated to.
7. Refactor the `.pending` method defined in the Donations model.
8. Return the total amount of donations Santa has made.
9. Return the count of donations made by Charlie Brown.
10. Return the name of the first organization Grinch donated to. 
11. Create a list of the names of donors that have donated to Red Cross. 

