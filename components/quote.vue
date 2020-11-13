<template>
  <div class="quickWrap">


    <div class="flex flex-col">
      <div class="quoteHeader">
        <h1>Icelabz</h1>
      </div>
      <div class="quoteContacts">
        <div class="">
          <ul class="font-thin">
            <li>
              <strong class="font-semibold tracking-wide">
                To: Bhavesh Ramburn
              </strong>
            </li>
            <li>
              53 The Meadow Way
            </li>
            <li>
              Harrow Weald
            </li>
            <li>HA3 7BP</li>


          </ul>
        </div>
        <div class="">
          &nbsp;
        </div>
        <div class="text-right ">
          <ul class="font-thin text-sm">
            <li class="font-semibold tracking-wide">Icelabz Solutions Ltd</li>
            <li>53 The Meadow Way</li>
            <li> Harrow Weald</li>
            <li>HA3 7BP</li>
            <li>
              <i class="far fa-envelope text-blue-600"></i> <a href="mailto:info@icelabz.co.uk">info@icelabz.co.uk</a>

            </li>
            <li>
              <i class="far fa-phone-alt text-green-500"></i> <a href="tel:+442037443020">0203 744 3020</a>
            </li>
          </ul>


        </div>
      </div>
      <div class="quoteSmallDetails ">
        <div>
          Date: 23rd of October 2020
        </div>
        <div>
          Valid until 1st of Novembe 2020
        </div>
        <div>
          Quote Ref #2232193
        </div>
      </div>


      <div>
        <!--      start header of table-->
        <div class="flex -mx-1 border-b py-2 items-start">
          <div class="flex-1 px-1">
            <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">Description</p>
          </div>

          <div class="px-1 w-20 text-right">
            <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">Units</p>
          </div>

          <div class="px-1 w-32 text-right">
            <p class="leading-none">
              <span class="block uppercase tracking-wide text-sm font-bold text-gray-800">Unit Price</span>
            </p>
          </div>

          <div class="px-1 w-32 text-right">
            <p class="leading-none">
              <span class="block uppercase tracking-wide text-sm font-bold text-gray-800">Amount</span>
            </p>
          </div>


        </div>
        <div class="flex -mx-1 py-2 border-b text-sm">
          <div class="flex-1 px-1">
            <p class="text-gray-800">Measured Building Survey</p>
            <p class="text-gray-600 text-xs">
              Floor Plan(s)	0 <br/>
              Roof plan(s)	0 <br/>
              Loft Plan(s)	0 <br/>
              Section(s)	0<br/>
              Elevation(s)	0<br/>
              Topographical Plan	0<br/>
            </p>
          </div>

          <div class="px-1 w-20 text-right">
            <p class="text-gray-800">0</p>
          </div>

          <div class="px-1 w-32 text-right">
            <p class="text-gray-800">£0.00</p>
          </div>

          <div class="px-1 w-32 text-right">
            <p class="text-gray-800">£0.00</p>
          </div>


        </div>

      </div>
      <div class="py-2 ml-auto mt-5 w-full sm:w-2/4 lg:w-1/4">
        <div class="flex justify-between mb-3">
          <div class="text-gray-800 text-right flex-1">Total incl. VAT</div>
          <div class="text-right w-40">
            <div class="text-gray-800 font-medium">£0.00</div>
          </div>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-sm text-gray-600 text-right flex-1">VAT(20%) incl. in Total</div>
          <div class="text-right w-40">
            <div class="text-sm text-gray-600">£0.00</div>
          </div>
        </div>

        <div class="py-2 border-t border-b">
          <div class="flex justify-between">
            <div class="text-lg text-gray-600 text-right flex-1">Amount due</div>
            <div class="text-right w-40">
              <div class="text-lg text-gray-800 font-bold">£0.00</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
            class="px-4 py-2 rounded text-white font-semibold tracking-wide text-sm btn-green hover:text-gray-100 border-green-700 border shadow">
          Accept
        </button>
        <button
            class="px-4 py-2 rounded text-white font-semibold tracking-wide text-sm bg-red-600 hover:text-gray-100 border-red-700 border shadow">
          Decline
        </button>
        <div class="rounded-md shadow-sm">
          <label for="about">Request Changes</label>
          <textarea id="about" rows="3"
                    class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="you@example.com"></textarea>

        </div>
        <span class=" rounded-md shadow-sm">
              <button type="button"
                      class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                Submit
              </button>
            </span>
      </div>
      <div>
        <div>

          <!--      start terms and conditions-->
          <ul class="tnc">
            <li>
              The client is responsible to liaise with Icelabz in advance to programme the attendance of the surveyor
            </li>
            <li>Payment term; 20% upfront and 80% on delivery of the PDF. CAD drawings (.dwg, etc..) will be issued on
              payment of invoices.
            </li>
            <li>Notification of termination of services is 7 days</li>

            <li>The quote is only valid for 7 days from 22/06/2016</li>
            <li>T&C based on RICS Terms and Conditions for Land Surveying Services (3rd edition)
              http://icelabzsolutions.com/terms.pdf
            </li>

          </ul>
        </div>
        <div class="mt-3">
          <h4 class="font-semibold tracking-wider underline">Facilities and attendances to be provided within the rates
            by:</h4>
          <table class="w-full">
            <thead>
            <tr class="text-black font-semibold tracking-wide">
              <td width="60%">Description</td>
              <td width="20%">Surveyor</td>
              <td width="20%">Client</td>
            </tr>
            </thead>
            <tbody class="text-sm">
            <tr>
              <td>Office Desk</td>
              <td><i class="far fa-check"></i></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                Charging Facility for equipments
              </td>
              <td></td>
              <td><i class="far fa-check"></i></td>
            </tr>
            <tr>
              <td>Shared Welfare Facilities</td>
              <td>n/a</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Risk assessment and method statement</td>
              <td>n/a</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Induction</td>
              <td></td>
              <td><i class="far fa-check"></i></td>
            </tr>
            <tr>
              <td>PC, Monitor/Laptop, etc...</td>
              <td><i class="far fa-check"></i></td>
              <td></td>
            </tr>
            <tr>
              <td>Software for CAD, data, etc...</td>
              <td><i class="far fa-check"></i></td>
              <td></td>
            </tr>
            <tr>
              <td>Total Station (including accessories; legs, staff, prism, battery)</td>
              <td><i class="far fa-check"></i></td>
              <td></td>
            </tr>
            <tr>
              <td>GNSS Total Station (GPS)</td>
              <td>n/a</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Consumables for the surveys (chalk, spray, pegs, road pins, etc...)</td>
              <td>n/a</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Transport to and from work</td>
              <td><i class="far fa-check"></i></td>
              <td></td>
            </tr>
            <tr>
              <td>Parking Facilities</td>
              <td></td>
              <td><i class="far fa-check"></i></td>
            </tr>
            <tr>
              <td>Lifting Keys</td>
              <td><i class="far fa-check"></i></td>
              <td></td>

            </tr>
            <tr>
              <td>
                Scaffold access if required (including Lanyard)

              </td>
              <td></td>
              <td><i class="far fa-check"></i></td>

            </tr>
            <tr>
              <td>PPE (Icelabz tabard, hardhat, boots, and gloves</td>
              <td><i class="far fa-check"></i></td>
              <td></td>
            </tr>
            </tbody>

          </table>
        </div>
        <!--      end terms and conditions-->
      </div>
      <div class="flex-grow text-xs mt-8">
        <p>Copyright icelabz.co.uk 2020</p>
        <p>Icelabz Solutions Ltd Registered Office: First Floor, 459 Finchley Road, Hampstead, London, NW3 6HN. Company
          Number: 09606511. VAT Number: GB246085991</p>
      </div>

    </div>

    <!--    new table-->


  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";

@Component
export default class quote extends Vue {


}
</script>

<style lang="postcss">
@import url('~/assets/quote.pcss');
</style>
