const newFormHandler = async (event) => {
  event.preventDefault();
  
  const id = document.querySelector('#lotteries-id').value.trim();
  const name = document.querySelector('#lotteries-name').value.trim();
  const user_min_purchase = document.querySelector('#lotteries-userMinPurchase').value.trim();
  const user_max_purchase = document.querySelector('#lotteries-userMaxPurchase').value.trim();
  const multiplier_name = document.querySelector('#lotteries-multiplierName').value.trim();
  const multiplier_allowed = document.querySelector('#lotteries-multiplierAllowed').value.trim();
  const draws_mon = document.querySelector('#lotteries-drawsMon').value.trim();
  const draws_tue = document.querySelector('#lotteries-drawsTue').value.trim();
  const draws_wed = document.querySelector('#lotteries-drawsWed').value.trim();
  const draws_thu = document.querySelector('#lotteries-drawsThu').value.trim();
  const draws_fri = document.querySelector('#lotteries-drawsFri').value.trim();
  const draws_sat = document.querySelector('#lotteries-drawsSat').value.trim();
  const draws_sun = document.querySelector('#lotteries-drawsSun').value.trim();

  if (name && user_min_purchase && user_max_purchase && multiplier_name && multiplier_allowed && draws_mon && draws_tue && draws_wed && draws_thu && draws_fri && draws_sat && draws_sun) {
    const response = await fetch(`/api/lotteries`, {
      method: 'POST',
      body: JSON.stringify({ name, user_min_purchase, user_max_purchase, multiplier_name, multiplier_allowed, draws_mon, draws_tue, draws_wed, draws_thu, draws_fri, draws_sat, draws_sun }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/lotteries');
    } else {
      alert('Failed to create lotteries');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/lotteries/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/lotteries');
    } else {
      alert('Failed to delete lotteries');
    }
  }
};

document
  .querySelector('.new-lotteries-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.lotteries-list')
  .addEventListener('click', delButtonHandler);
