<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Order</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>First name</label>
                    <input type="text" class="form-control" v-model="student.fname" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="student.lname" required>
                </div>
                <div class="form-group">
                    <label>Order</label>
                    <input type="text" class="form-control" v-model="student.order" required>
                </div>
                <div class="form-group">
                    <label>Quantity</label>
                    <input type="text" class="form-control" v-model="student.quantity" required>
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="student.address" required>
                </div>
                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" v-model="student.amount" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student: {
                   fname: '',
                    lname: '',
                    order: '',
                    quantity: '',
                    address: '',
                    amount: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';
                
                axios.post(apiURL, this.student).then(() => {
                  this.$router.push('/view')
                  this.student = {
                    fname: '',
                    lname: '',
                    order: '',
                    quantity: '',
                    address: '',
                    amount: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
                
        }
    }
</script>
<style>
    body{
        background:url('../assets/create.png');
        background-repeat: no-repeat;
        background-size: 100%;
    }
</style>