class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true

  has_many :registrations
  has_many :races, through: :registrations
  has_many :rosters
  has_many :teams, through: :rosters

  def formatted_date
    created_at.strftime("%m/%d/%Y")
  end
end
