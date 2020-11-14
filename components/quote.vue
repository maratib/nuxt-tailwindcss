<template>
  <div class="quickWrap">
    <div class="flex flex-col md:px-12 px-2 pt-4 relative">
      <div class="flex items-center">
        <div class="w-1/2">
          <img src="@/docs/logo.jpg" alt="" class="md:w-1/3 w-4/5" />
        </div>
        <div class="w-1/2 quoteHeader text-right">
          <h1 class="md:text-5xl text-2xl">Invoice</h1>
          <p class="font-bold text-sm -mt-3">October 23, 2020</p>
        </div>
      </div>
      <div class="flex flex-wrap items-start">
        <div class="md:w-1/3 w-full pt-5 text-left">
          <p class="mt-8 font-light uppercase">To,</p>
          <p class="capitalize text-xl font-bold">Bhavesh Ramburn</p>
          <p class="font-light text-sm">53 The Meadow Way</p>
          <p class="font-light text-sm">Harrow Weald</p>
          <p class="font-light text-sm">HA3 7BP</p>
        </div>
        <div class="w-full md:hidden my-4 bg-gray-200 h-px"></div>
        <div class="md:w-2/3 w-full md:text-right text-left">
          <p class="capitalize text-xl font-bold md:mt-8">
            Icelabz Solutions Ltd
          </p>
          <p class="font-light text-sm">53 The Meadow Way</p>
          <p class="font-light text-sm">Harrow Weald</p>
          <p class="font-light text-sm">info@icelabz.co.uk</p>
        </div>
      </div>
      <div class="quoteSmallDetails flex">
        <div class="w-1/2 md:text-sm text-xs text-left">Quote Ref #2232193</div>
        <div class="w-1/2 md:text-sm text-xs text-right">
          <span class="md:block hidden">Valid until 1st November, 2020</span>
          <span class="md:hidden block">Valid until 1-11-2020</span>
        </div>
      </div>

      <div>
        <!--      start header of table-->
        <div class="flex -mx-1 border-b border-t py-2 items-center">
          <div class="flex-1 px-1 text-left">
            <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">
              Description
            </p>
          </div>

          <div class="px-1 w-1/5 text-right">
            <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">
              Units
            </p>
          </div>

          <div class="px-1 w-1/5 text-right">
            <p class="leading-none">
              <span
                class="block uppercase tracking-wide text-sm font-bold text-gray-800 md:inline hidden"
                >Unit Price</span
              >
              <span
                class="block uppercase tracking-wide text-sm font-bold text-gray-800 md:hidden inline"
                >Price</span
              >
            </p>
          </div>

          <div class="px-1 w-1/5 text-right">
            <p class="leading-none">
              <span
                class="block uppercase tracking-wide text-sm font-bold text-gray-800"
                >Amount</span
              >
            </p>
          </div>
        </div>
        <div class="flex -mx-1 py-2 border-b text-sm">
          <div class="flex-1 px-1 text-left">
            <p class="text-gray-800">Measured Building Survey</p>
            <p class="text-gray-600 text-xs">
              Floor Plan(s) 0 <br />
              Roof plan(s) 0 <br />
              Loft Plan(s) 0 <br />
              Section(s) 0<br />
              Elevation(s) 0<br />
              Topographical Plan 0<br />
            </p>
          </div>

          <div class="px-1 w-1/5 text-right">
            <p class="text-gray-800">0</p>
          </div>

          <div class="px-1 w-1/5 text-right">
            <p class="text-gray-800">£0.00</p>
          </div>

          <div class="px-1 w-1/5 text-right">
            <p class="text-gray-800">£0.00</p>
          </div>
        </div>
      </div>

      <div class="py-2 md:ml-auto my-5 md:w-2/5 w-full">
        <div class="flex justify-between mb-3">
          <div class="text-gray-800 text-right flex-1">Total incl. VAT</div>
          <div class="text-right w-40">
            <div class="text-gray-800 font-medium">£0.00</div>
          </div>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-sm text-gray-600 text-right flex-1">
            VAT(20%) incl. in Total
          </div>
          <div class="text-right w-40">
            <div class="text-sm text-gray-600">£0.00</div>
          </div>
        </div>

        <div class="py-2 border-t border-b">
          <div class="flex justify-between">
            <div class="text-lg text-gray-600 text-right flex-1">
              Amount due
            </div>
            <div class="text-right w-40">
              <div class="text-lg text-gray-800 font-bold">£0.00</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mt-2 mb-8">
        <div class="w-1/2 text-left">
          <button
            class="px-8 py-2 rounded-3xl text-white font-semibold tracking-wide text-sm btn-green hover:text-gray-100 shadow-lg outline-none"
          >
            Accept
          </button>
        </div>
        <div class="w-1/2 text-right">
          <button
            class="px-8 py-2 rounded-3xl text-white font-semibold tracking-wide text-sm bg-red-600 hover:text-gray-100 shadow-lg outline-none"
          >
            Decline
          </button>
        </div>
      </div>
      <div class="flex flex-wrap mt-3 mb-6">
        <div class="w-full">
          <label for="about" class="text-lg font-bold text-left text-primary"
            >Request Changes</label
          >
          <div class="w-full bg-primary h-px mt-3 mb-6"></div>
          <textarea
            id="about"
            cols="20"
            rows="5"
            class="form-textarea my-4 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border pl-3 pt-3"
            placeholder="you@example.com"
          ></textarea>
        </div>
        <div class="w-full text-right my-3">
          <button
            type="button"
            class="py-2 px-8 bg-gray-300 rounded-md text-sm leading-4 font-medium text-primary hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        <div class="mb-3">
          <!--      start terms and conditions-->
          <ul class="tnc text-left">
            <li>
              The client is responsible to liaise with Icelabz in advance to
              programme the attendance of the surveyor
            </li>
            <li class="my-2">
              Payment term; 20% upfront and 80% on delivery of the PDF. CAD
              drawings (.dwg, etc..) will be issued on payment of invoices.
            </li>
            <li class="my-2">
              Notification of termination of services is 7 days
            </li>

            <li class="my-2">
              The quote is only valid for 7 days from 22/06/2016
            </li>
            <li class="mb-2">
              T&C based on RICS Terms and Conditions for Land Surveying Services
              (3rd edition) http://icelabzsolutions.com/terms.pdf
            </li>
          </ul>
        </div>
        <div class="mt-3">
          <h4 class="font-semibold tracking-wider underline my-3">
            Facilities and attendances to be provided within the rates by:
          </h4>
          <table class="w-full">
            <thead class="border-t border-b">
              <tr class="text-black font-semibold tracking-wide">
                <td width="60%" class="text-left">Description</td>
                <td width="20%">Surveyor</td>
                <td width="20%">Client</td>
              </tr>
            </thead>
            <tbody class="text-sm mt-4">
              <tr>
                <td class="text-left">Office Desk</td>
                <td><i class="far fa-check"></i></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td class="text-left">Charging Facility for equipments</td>
                <td></td>
                <td><i class="far fa-check"></i></td>
              </tr>
              <tr>
                <td class="text-left">Shared Welfare Facilities</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td class="text-left">Risk assessment and method statement</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td class="text-left">Induction</td>
                <td></td>
                <td><i class="far fa-check"></i></td>
              </tr>
              <tr>
                <td class="text-left">PC, Monitor/Laptop, etc...</td>
                <td><i class="far fa-check"></i></td>
                <td></td>
              </tr>
              <tr>
                <td class="text-left">Software for CAD, data, etc...</td>
                <td><i class="far fa-check"></i></td>
                <td></td>
              </tr>
              <tr>
                <td class="text-left">
                  Total Station (including accessories; legs, staff, prism,
                  battery)
                </td>
                <td><i class="far fa-check"></i></td>
                <td></td>
              </tr>
              <tr>
                <td class="text-left">GNSS Total Station (GPS)</td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td class="text-left">
                  Consumables for the surveys (chalk, spray, pegs, road pins,
                  etc...)
                </td>
                <td>n/a</td>
                <td>n/a</td>
              </tr>
              <tr>
                <td class="text-left">Transport to and from work</td>
                <td><i class="far fa-check"></i></td>
                <td></td>
              </tr>
              <tr>
                <td class="text-left">Parking Facilities</td>
                <td></td>
                <td><i class="far fa-check"></i></td>
              </tr>
              <tr>
                <td class="text-left">Lifting Keys</td>
                <td><i class="far fa-check"></i></td>
                <td></td>
              </tr>
              <tr>
                <td class="text-left">
                  Scaffold access if required (including Lanyard)
                </td>
                <td></td>
                <td><i class="far fa-check"></i></td>
              </tr>
              <tr>
                <td class="text-left">
                  PPE (Icelabz tabard, hardhat, boots, and gloves
                </td>
                <td><i class="far fa-check"></i></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--      end terms and conditions-->
      </div>
      <div class="flex flex-wrap text-xs md:py-6 py-3 px-3 mt-8">
        <div class="md:w-1/4 w-full md:text-left text-center md:mb-0 mb-4">
          <p>Copyright icelabz.co.uk 2020</p>
        </div>
        <div class="md:w-3/4 w-full md:text-right text-center">
          <p>
            Icelabz Solutions Ltd Registered Office: First Floor, 459 Finchley
            Road, Hampstead, London, NW3 6HN. Company Number: 09606511. VAT
            Number: GB246085991
          </p>
        </div>
      </div>
      <div class="top-right-shape absolute top-0 right-0 md:block hidden"></div>
      <div class="bottom-left-shape absolute bottom-0 md:block hidden"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class quote extends Vue {}
</script>

<style lang="postcss">
@import url('~/assets/quote.pcss');
</style>
