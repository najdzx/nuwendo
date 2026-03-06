import { BASE_URL } from '@/config/api'

export const addressService = {
  async getRegions() {
    const response = await fetch(`${BASE_URL}/api/addresses/regions`)
    const data = await response.json()
    if (!data.success) throw new Error(data.message)
    return data.regions
  },

  async getProvinces(regionCode: string) {
    const response = await fetch(`${BASE_URL}/api/addresses/provinces/${regionCode}`)
    const data = await response.json()
    if (!data.success) throw new Error(data.message)
    return data.provinces
  },

  async getCities(provinceCode: string) {
    const response = await fetch(`${BASE_URL}/api/addresses/cities/${provinceCode}`)
    const data = await response.json()
    if (!data.success) throw new Error(data.message)
    return data.cities
  },

  async getBarangays(cityCode: string) {
    const response = await fetch(`${BASE_URL}/api/addresses/barangays/${cityCode}`)
    const data = await response.json()
    if (!data.success) throw new Error(data.message)
    return data.barangays
  }
}
