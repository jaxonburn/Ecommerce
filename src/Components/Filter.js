
import React, { Component } from 'react'


class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <span>Categories:  </span>
            <form>
              <select>
                <option></option>
                <option>Phone</option>
                <option>Tv</option>
                <option>Small-Appliance</option>
                <option>Refrigerator</option>
                <option>Watch</option>
                <option>Action-Camera</option>
              </select>
            </form>
            </div>
        )
    }
}

export default Filter
